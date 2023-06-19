import RestaurantNavBar from '@/app/restaurant/components/RestaurantNavBar'
import MenuDetails from '@/app/restaurant/components/MenuDetails'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Menu = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="bg-white w-[100%] rounded p-3 shadow">
      {/* RESAURANT NAVBAR */}
      <RestaurantNavBar slug={params.slug} />
      <MenuDetails />
    </div>
  )
}

export default Menu