import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
      <div className="w-[90%] mx-auto flex items-center">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              width={500}
              height={500}
              unoptimized
              className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
              alt="About Us Image"
              src="https://i.imgur.com/WbQnbas.png"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
              doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
              voluptatum.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
