import React from 'react'

export default function About1() {
  return (
    <div>
      <div className="">
      <div className="py-16 mb-10 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12 ">
                      <img className='rounded-lg'
                          src="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=800"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                     Carried Out by a Full stack Mern Developer
                      </h2>
                      <p className="mt-6 text-gray-800">
                          I am  passinate to a full stack java and mern Developer.
                          I am pursuing my B.Tech program from dhanalakshmi college affliated with Anna university With the branch of computer science and enginnering.
                          </p>
                      <p className="mt-4 text-gray-600">
                          About my programming skill I have done data structure with the programming language java. I have done more than 250 of codes. </p>
                  </div>
              </div>
          </div>
      </div>

      <div className="mb-10 mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-xl font-bold  sm:text-3xl">
                            Take a look on my website
                            <span className="hidden sm:block text-gray-600 text-4xl">AR_Reality</span>
                        </h2>

                        <a
                            className="inline-flex  text-white items-center px-6 py-3 font-medium bg-orange-500 rounded-lg hover:opacity-75"
                            href="https://muskanbharti08.github.io/AR_Reality/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Visit now
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-11/12 mx-auto sm:mx-0 sm:w-1/2 rounded-2xl shadow-md shadow-purple-300" src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-56 rounded-md" src="https://images.pexels.com/photos/4458549/pexels-photo-4458549.jpeg?auto=compress&cs=tinysrgb&w=800" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Just Growing up to upper</h1>
        </div>
      </div>
    </div>
  )
}
