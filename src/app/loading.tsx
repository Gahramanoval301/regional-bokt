import CircularProgress from '@/components/_layout/CircularProgress'
import React from 'react'

const loading = () => {
  return (
    <>
    <div className='text-center'>Loading...</div>
    <CircularProgress />
    </>
  )
}

export default loading