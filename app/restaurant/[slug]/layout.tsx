import Header from '@/app/components/Header'
import { useParams } from 'next/navigation';

const RestaurantLayout = (
  { children, 
    params 
  }: {
    children: React.ReactNode;
    params: {slug: string}
  }
) => {
  return (
    //generate layout for restaurant page
    <>
      <Header name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>

  )
}

export default RestaurantLayout