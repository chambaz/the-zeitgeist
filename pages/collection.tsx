import { NextPage } from 'next'
import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import { NextSeo } from 'next-seo'
import { Layout } from '../components/layout'

type CollectionProps = {
  items: any[]
}

const Collection: NextPage<CollectionProps> = ({ items }) => {
  return (
    <Layout>
      <>
        <NextSeo
          title="The Zeitgeist - NFT Collection"
          description="View the full Zeitgeist collection, minted on the Ethereum blockchain"
          canonical={process.env.NEXT_PUBLIC_BASE_URL + '/collection'}
          openGraph={{
            title: 'The Zeitgeist - NFT Collection',
            description: 'View the full Zeitgeist collection, minted on the Ethereum blockchain',
          }}
        />
        <div className="flex flex-col justify-center px-4 mx-auto max-w-8xl">
          <div className="grid max-w-5xl grid-cols-1 mx-auto mt-32 md:grid-cols-2 gap-x-8 gap-y-20">
            {items.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.openSeaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block h-full shadow-lg transition duration-300 relative hover:scale-[1.02] border border-t-0 border-zinc-700"
                >
                  <div className="absolute top-0 left-0 inline-flex items-center justify-center p-6 text-3xl bg-teal-500 text-zinc-700">
                    #
                    <span className="font-serif -translate-y-[5px] text-black font-bold">
                      {item.tokenId}
                    </span>
                  </div>
                  <img src={item.image} />
                  <div className="p-6 space-y-4 text-white">
                    <h3 className="flex justify-between mt-2 mb-1 text-xl font-bold">
                      {item.trend}
                      <span className="text-lg text-gray-500">{item.date}</span>{' '}
                    </h3>
                    <p className="text-lg">{item.prompt}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </>
    </Layout>
  )
}

export default Collection

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = await client.db()

    const items = await db.collection('items').find({}).sort('tokenId', -1).toArray()

    const itemsFiltered = items.map((item) => {
      return {
        trend: item.trend,
        prompt: item.prompt,
        image: item.image,
        tokenId: item.tokenId,
        date: item.date,
        openSeaUrl: `${process.env.NEXT_PUBLIC_OPENSEA_URL}/${process.env.NEXT_PUBLIC_ZEITGEIST_CONTRACT_ADDRESS}/${item.tokenId}`,
      }
    })

    return {
      props: { items: itemsFiltered },
    }
  } catch (e) {
    console.error(e)
    return {
      props: {},
    }
  }
}
