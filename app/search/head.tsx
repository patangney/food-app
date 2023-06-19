import Head from 'next/head'



const MetaHead = () => {
  metadata.title = 'Search | OpenTable'
  //metadata.description = 'Search for restaurants in San Francisco.'
  return (
    <div>
      <Head>
        <title>
          Search | OpenTable
        </title>
        <meta
          name="description"
          content="Search for restaurants in San Francisco."
          key="desc"
        />
      </Head>
    </div>
  )
}

export default MetaHead