import { PRICE } from "@prisma/client"

const Price = ({ price }: { price: PRICE }) => {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) return (
      <>
        <span className="text-green-500">€</span><span className="text-gray-400">€€€</span>
      </>
    )
    else if (price === PRICE.REGULAR) return (
      <>
        <span className="text-green-500">€€</span><span className="text-gray-400">€€</span>
      </>
    )
    else if (price === PRICE.EXPENSIVE) return (
      <>
        <span className="text-green-500">€€€</span><span className="text-gray-400">€</span>
      </>
    )
    else {
      return (
        <>
          <span>€€€€</span>
        </>
      )
    }
  }
  return (
    <p className="flex mr-3">{renderPrice()}</p>
  )
}

export default Price