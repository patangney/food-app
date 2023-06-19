import React from 'react'
import Navbar from '@/app/components/Navbar'
import Header from '@/app/restaurant/components/Header'
import RestaurantNavBar from '@/app/restaurant/components/RestaurantNavBar'
import MenuDetails from '@/app/restaurant/components/MenuDetails'

const Menu = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            {/* RESAURANT NAVBAR */}
            <RestaurantNavBar  />
            <MenuDetails />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Menu