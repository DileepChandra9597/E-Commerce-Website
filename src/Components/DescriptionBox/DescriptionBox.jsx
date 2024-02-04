import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An E-Commerce website is an online platform where businesses 
          or individuals can buy and sell products or services over the internet. 
          It allows customers to browse through a wide range of products, make purchases, 
          and complete transactions entirely online.</p>
        <p>E-Commerce website serves as a digital storefront for businesses to reach 
          a wider audience, increase sales, and provide convenient shopping experiences 
          for customers across the globe.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
