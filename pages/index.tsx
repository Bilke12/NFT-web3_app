import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Matej NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-red-500 text-4xl font-bold'>Dobrodosli u NFT drop page</h1>
    </div>
  )
}

export default Home