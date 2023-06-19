import { Item } from "@prisma/client"
import MenuCard from "./MenuCard"


const MenuDetails = ({ menu }: { menu: Item[] }) => {
  return (
    <div className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu.length > 0 ? menu.map((item) => {
            return <MenuCard key={item.id} item={item} />

          }) : <div className="flex flex-wrap justify-between"><p>No Menu found</p></div>
          }
        </div>
      </div>
    </div>
  )
}

export default MenuDetails