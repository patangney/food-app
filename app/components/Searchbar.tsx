"use client"; //convert to client side app
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Searchbar = () => {
  const router = useRouter(); //use router
  const [location, setLocation] = useState<string>(''); //set location to empty string
  return (
    <div className="text-left text-lg py-3 m-auto flex justify-center" >
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
      />
      <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={() => {
        if (location === '') {
          alert('Please enter a location')
        } else {
          router.push(`/search?city=${location}`)
          setLocation('')
        }
      }}>
        Let's go
      </button>
    </div >

  )
}

export default Searchbar