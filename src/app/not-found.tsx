import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="text-2xl mt-4 text-gray-600">Oops! Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-500">
        We&apos;re sorry, but the page you were looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:text-blue-700">
        Go back to Home
      </Link>
      {/* <div className="mt-6">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Search
        </button>
      </div> */}
    </div>
  );
}

export default NotFoundPage