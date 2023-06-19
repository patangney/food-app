import Header from '@/app/components/Header'

const RestaurantLayout = (
  { children }: { children: React.ReactNode }
) => {
  return (
    //generate layout for restaurant page
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>

  )
}

export default RestaurantLayout