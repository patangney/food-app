import Searchbar from '@/app/components/Searchbar'

const Header = ({ name }: { name: string }) => {
  const renderTitle = () => {
    const titleArray = name.split('-')
    titleArray[titleArray.length - 1] = `(${titleArray[titleArray.length - 1]})` // add parentheses to the last word
    const title = titleArray.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    return title.join(' ') // join the array into a string
  }
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          {renderTitle()}
        </h1>
        <Searchbar /> 
      </div>
    </div>
  )
}

export default Header