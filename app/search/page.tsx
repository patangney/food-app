
import { PRICE, PrismaClient } from '@prisma/client'
import Header from '@/app/search/components/Header'
import Sidebar from '@/app/search/components/Sidebar'
import RestaurantCard from '@/app/search/components/RestaurantCard'



export const metadata = {
  title: 'Search for restaurants',
  description: 'Search for restaurants',

}

const prisma = new PrismaClient()

const fetchRestaurantsByCity = (city: string | undefined) => {

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  }

  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase()
        }
      }
    },
    select
  });
}

const fetchLocations = async () => {
  return prisma.location.findMany({})
}

const fetchCuisines = async () => {
  return prisma.cuisine.findMany({})
}

// optional params with ? and destructuring
const Search = async ({ searchParams }: { searchParams: { city?: string, cuisine?: string, price?: PRICE } }) => {
  const restaurants = await fetchRestaurantsByCity(searchParams.city)
  const location = await fetchLocations()
  const cuisine = await fetchCuisines()
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Sidebar
          locations={location}
          cuisines={cuisine}
          searchParams={searchParams} />
          
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </>
          ) : searchParams.city ? <h1 className="text-2xl text-center">No restaurants found in {searchParams.city}</h1> : <h1 className="text-2xl text-center">No restaurants found in that area</h1>}

        </div>
      </div>
    </>
  )
}

export default Search