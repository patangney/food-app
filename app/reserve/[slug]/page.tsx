import React from 'react'
import Link from 'next/link'
import Navbar from '@/app/components/navbar/Navbar'
import Header from '@/app/reserve/components/Header'
import Form from '@/app/reserve/components/Form'


const Reserve = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
       <Navbar />
        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
    
            <Header />
            <Form />

           {/* FORM */}

          </div>
        </div>
      </div>
    </main>

  )
}

export default Reserve