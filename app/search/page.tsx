import React from 'react'
import Header from '@/app/search/components/Header'
import Sidebar from '@/app/search/components/Sidebar'
import RestaurantCard from '@/app/search/components/RestaurantCard'
import MetaHead from '@/app/search/head'

const Search = () => {
  return (
    <>
      <MetaHead />
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <Sidebar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  )
}

export default Search