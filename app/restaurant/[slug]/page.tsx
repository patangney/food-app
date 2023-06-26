import { PrismaClient, Review } from '@prisma/client'

import RestaurantNavBar from '@/app/restaurant/components/RestaurantNavBar'
import Title from '@/app/restaurant/components/Title'
import Ratings from '@/app/restaurant/components/Ratings'
import Description from '@/app/restaurant/components/Description'
import Images from '@/app/restaurant/components/Images'
import Reviews from '@/app/restaurant/components/Reviews'
import ReservationsCard from '@/app/restaurant/components/ReservationsCard'
import { notFound } from 'next/navigation'

const prisma = new PrismaClient()

interface Restaurant {
  id: number,
  name: string,
  main_image: string,
  images: string[],
  description: string,
  slug: string,
  reviews: Review[]
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug: slug
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      images: true,
      description: true,
      slug: true,
      reviews: true
    }
  });

  if(!restaurant) {
    notFound()
  }
  return restaurant;
}

const RestaurantDetails = async ({params}: {params: {slug: string}}) => {
  
  const restaurant = await fetchRestaurantBySlug(params.slug)
  console.log(restaurant)
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Ratings reviews={restaurant.reviews} />
        <Description description={restaurant.description}/>
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <ReservationsCard />
    </>
  )
}

export default RestaurantDetails