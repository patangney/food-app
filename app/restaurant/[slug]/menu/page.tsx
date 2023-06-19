
import RestaurantNavBar from '@/app/restaurant/components/RestaurantNavBar'
import MenuDetails from '@/app/restaurant/components/MenuDetails'
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
     items: true
    }
  })

  if(!restaurant) {
    throw new Error('Restaurant not found')
  }

  return restaurant.items
}

const Menu =  async ({ params }: { params: { slug: string } }) => {
   const menu = await fetchRestaurantMenu(params.slug)
   console.log(menu, 'menu')

  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      {/* RESAURANT NAVBAR */}
      <RestaurantNavBar slug={params.slug} />
      <MenuDetails menu={menu} />
    </div>
  )
}

export default Menu