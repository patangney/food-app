
import Header from '@/app/components/Header'
import RestaurantCard from '@/app/components/RestaurantCard'
import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client'


export const metadata = {
  title: 'Food App',
  description: 'Food App'  
}

export interface RestaurantCardType {
  id: number,
  name: string,
  main_image: string,
  cuisine: Cuisine,
  location: Location,
  price: PRICE,
  slug: string | null,
}

const prisma = new PrismaClient() 

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    }
  });
  return restaurants;
}

export default async function Home() {
  const restaurants = await fetchRestaurants()
  console.log(restaurants)

  return (
    <div >
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
        
      </div>
    </div>

  )
}
