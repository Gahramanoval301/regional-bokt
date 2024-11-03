import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
      <div>
          <h1>Page Not Found</h1>
          <p>The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className='' >Back to home</Link>
  
    </div>
  )
}

export default NotFoundPage