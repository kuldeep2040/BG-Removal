import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py3 pb-5'>
      <img width={150} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All right reserved. Copyright @kuldeep2040</p>
      <div className='flex gap-1'>
        <img src={assets.facebook_icon} width={40} alt="" />
        <img src={assets.twitter_icon} width={40} alt="" />
        <img src={assets.google_plus_icon} width={40} alt="" />
      </div>
    </div>
  )
}

export default Footer
