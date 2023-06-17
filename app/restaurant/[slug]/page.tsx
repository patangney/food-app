import Navbar from '@/app/components/navbar/Navbar'
import Header from '@/app/restaurant/components/Header'
import RestaurantNavBar from '@/app/restaurant/components/RestaurantNavBar'
import Title from '@/app/restaurant/components/Title'
import Ratings from '@/app/restaurant/components/Ratings'
import Description from '@/app/restaurant/components/Description'
import Images from '@/app/restaurant/components/Images'
import Reviews from '@/app/restaurant/components/Reviews'
import ReservationsCard from '@/app/restaurant/components/ReservationsCard'


const RestaurantDetails = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title />
            <Ratings />
            <Description />
            <Images />
            <Reviews />
          </div>

          <ReservationsCard />
        </div>
      </div>
    </main>
  )
}

export default RestaurantDetails