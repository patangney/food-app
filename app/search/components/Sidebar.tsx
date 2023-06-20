import { Cuisine, Location, PRICE } from '@prisma/client'
import Link from 'next/link';

const prices = [
  {
    id: 1,
    label: '€',
    value: PRICE.CHEAP
  },
  {
    id: 2,
    label: '€€',
    value: PRICE.REGULAR
  },
  {
    id: 3,
    label: '€€€',
    value: PRICE.EXPENSIVE
  }
]

const Sidebar = ({
  locations,
  cuisines,
  searchParams
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string, cuisine?: string, price?: PRICE }
}) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              ...searchParams,
              query: { city: location.name },
            }}
            className="font-light text-reg capitalize" key={location.id}>
            {location.name}
          </Link>

        ))}
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              ...searchParams,
              query: { cuisine: cuisine.name },
            }}
            className="font-light text-reg capitalize" key={cuisine.id}>
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {prices.map((price) => (
            <Link
              href={{
                pathname: "/search",
                ...searchParams,
                query: { price: price.value },
              }}
              className="font-light text-reg capitalize" key={price.id}>
              {price.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar