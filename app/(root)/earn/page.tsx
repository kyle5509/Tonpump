'use client'
import { stopRedirect } from '@/redux/reducers/redirect'
import { useAppDispatch } from '@/redux/store/hook'
import React, { useEffect } from 'react'

export default function page() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(stopRedirect())
  }, [])
  return (
    <div className='h-screen grid place-content-center text-3xl lg:text-5xl font-bold text-prim'>Earn Page - Coming Soon!</div>
  )
}
