import React from 'react'
import Header from '@/app/reserve/components/Header'
import Form from '@/app/reserve/components/Form'


const Reserve = () => {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  )
}

export default Reserve