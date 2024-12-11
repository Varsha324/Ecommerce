import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description  
        </div>
        <div className="descriptionbox-nav-box-fade">
          Reviews(122) 
        </div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates the buying and selling of products 
        or services over the internet. 
        It serves as a virtual storefront where businesses showcase their offerings and customers can
        browse, select, and purchase items from the comfort of their homes. E-commerce websites typically include features such as product
         catalogs, shopping carts, secure payment gateways, and user accounts to enhance the shopping experience.</p>
       <p>The backbone of an e-commerce site is its ability to handle transactions securely while providing an intuitive and seamless user interface. 
       Advanced e-commerce platforms also incorporate personalized recommendations, customer reviews, and order tracking to build trust and engagement.
       Technologies like AI and machine learning are often integrated to analyze customer behavior and optimize marketing strategies.
       </p>
      </div>
    </div>
  )
}

export default DescriptionBox
