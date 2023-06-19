
import Header from '@/app/components/header/Header'
import RestaurantCard from '@/app/components/RestaurantCard/RestaurantCard'

export const metadata = {
  title: 'Food App',
  description: 'Food App'  
}

export default function Home() {

  return (
    <div >
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </div>

  )
}
