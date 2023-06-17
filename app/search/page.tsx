import React from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/navbar/Navbar'
import Header from '@/app/search/components/Header'
import Sidebar from '@/app/search/components/Sidebar'
import RestaurantCard from '@/app/search/components/RestaurantCard'

const Search = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />

        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <Sidebar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </div>
    </main>   
  )
}

export default Search