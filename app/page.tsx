
import Navbar from '@/app/components/navbar/Navbar'
import Header from '@/app/components/header/Header'
import Cards from '@/app/components/Card/Cards'

export default function Home() {

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <div className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          <Cards />
        </div>
      </div>
    </main>
  )
}
