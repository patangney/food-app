import Header from "./components/Header"

const loading = () => {
  return (
    <>
      <Header name={""} />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {
          Array(10).fill(0).map((_, i) => (
            <div key={i} className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
              <div className="animate-pulse">
                <div className="bg-gray-400 w-full h-36"></div>
                <div className="p-1">
                  <div className="flex items-start">
                    <div className="flex mb-2"><div className="bg-gray-400 w-12 h-4"></div></div>
                    <p className="ml-2"><div className="bg-gray-400 w-8 h-4"></div></p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3"><div className="bg-gray-400 w-16 h-4"></div></p>
                    <p><div className="bg-gray-400 w-8 h-4"></div></p>
                  </div>
                  <p className="text-sm mt-1 font-bold"><div className="bg-gray-400 w-24 h-4"></div></p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default loading