import { useRouter } from 'next/navigation';
import React from 'react'

const SearchButton = () => {
  const router = useRouter(); //use router
  return (
    <button className="rounded bg-red-600 px-9 py-2 text-white" onClick={() => {
      if (location) {
        router.push(`/search?location=${location}`)
      } else {
        router.push('/search')
      }
    }}>
      Let's go
    </button>
  )
}

export default SearchButton