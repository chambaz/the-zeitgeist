import type { NextPage } from 'next'
import Head from 'next/head'
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Zeitgeist</title>
      </Head>
      <div className="w-full h-full min-h-screen text-white bg-zinc-900">
        <header className="flex items-center p-12 space-between ">
          <a href="#" className="font-serif text-2xl">
            <strong className="font-bold">The Zeitgeist</strong> - NFT
            Collection
          </a>
          <nav className="flex items-center ml-auto">
            <ul className="flex gap-16 items-center text-lg font-medium translate-y-[1px]">
              <li>
                <a
                  href="#"
                  className="pb-1 transition duration-300 border-b border-transparent hover:border-white">
                  About The Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pb-1 transition duration-300 border-b border-transparent hover:border-white">
                  The Gallery
                </a>
              </li>
            </ul>
            <ul className="flex gap-6 items-center text-lg mx-16 font-medium translate-y-[1px]">
              <li>
                <a
                  href="#"
                  className="text-white transition duration-300 hover:text-teal-500">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white transition duration-300 hover:text-teal-500">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white transition duration-300 hover:text-teal-500">
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </nav>
          <button className="flex items-center px-6 py-3 transition duration-300 bg-white rounded-lg text-zinc-900 hover:bg-teal-500 hover:text-white">
            Connect Wallet
          </button>
        </header>
        <div className="flex flex-col justify-center mx-auto max-w-7xl">
          <div className="mt-24 space-y-8 text-center">
            <h1 className="leading-tight text-7xl">
              <span className="text-teal-400">Created</span> by A.I,{' '}
              <span className="text-teal-400">inspired</span> by culture.
              <br />
              One piece <span className="text-teal-400">generated</span> every
              day.
            </h1>
            <a
              href="#"
              className="inline-block text-lg italic text-gray-300 transition duration-300 border-b border-dashed hover:border-transparent">
              How does it work?
            </a>
          </div>

          <div className="flex flex-wrap mt-32 mb-28">
            {[...Array(8)].map((item, index) => {
              return (
                <div className="w-1/4 px-3 py-4" key={index}>
                  <a
                    href="#"
                    className="block p-4 bg-white rounded-md shadow-lg transition duration-300 hover:scale-[1.02]">
                    <img
                      src="https://placeimg.com/600/600/any"
                      className="rounded-md"
                    />
                    <div className="py-2 text-zinc-900">
                      <h3 className="my-2 font-bold">#000{index + 1}</h3>
                      <p className="text-xs italic text-gray-500">
                        &ldquo;Irure minim ullamco quis nulla mollit minim
                        cupidatat Lorem enim. Velit ex laborum adipisicing
                        occaecat cillum reprehenderit officia consectetur est
                        est velit irure mollit minim.&rdquo;
                      </p>
                    </div>
                  </a>
                </div>
              )
            })}

            <button className="flex items-center px-6 py-3 mx-auto mt-12 transition duration-300 bg-white rounded-lg text-zinc-900 hover:bg-teal-500 hover:text-white">
              View full collection
            </button>
          </div>
        </div>
        <footer className="px-4 py-10 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex flex-col items-center gap-8">
            <ul className="flex gap-6 items-center text-lg mx-16 font-medium translate-y-[1px]">
              <li>
                <a
                  href="#"
                  className="text-white transition duration-300 hover:text-teal-500">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white transition duration-300 hover:text-teal-500">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white transition duration-300 hover:text-teal-500">
                  <FaDiscord />
                </a>
              </li>
            </ul>
          </nav>
          <p className="mt-8 text-base text-center text-gray-300">
            &copy; 2022 The ZeitGeist. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  )
}

export default Home
