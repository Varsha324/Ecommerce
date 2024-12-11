import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
const ProductDisplay = (props) => {
    const{product}=props;
  return (
    <div className='productdisplay'>
        <div className='productdisply-left'>
        <div className='productdisplay-img-list'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        
        </div>
        <div className='productdisplay-main-img'>
        <img src={product.image} alt="" />
        </div>
    <div className="productdisply-right">
    <h1>{product.name}</h1>
     <div className="productdisplay-right-star">
       <img src={star_icon} alt="" /> 
       <img src={star_icon} alt="" /> 
       <img src={star_icon} alt="" /> 
       <img src={star_icon} alt="" /> 
       <img src={star_dull_icon} alt="" /> 
       <p>(122)</p>
     </div>
     <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">
          ${product.old_price}  
        </div>
        <div className="productdisplay-right-price-new">
          ${product.new_price}  
        </div>
     </div>
     <div className="productdisplay-right-description">
        A light weighted dress and a more comfortable dress
     </div>
     <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className="productdisplay-right-sizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>XL</div>
          <div>XXL</div>
          </div>
     </div>
     <div className="button">
     <div>ADD TO CART</div>
     </div>
    <p className='productdisplay-right-category'><span>Category :</span> Women, T-Shirt, Croptop</p>
    <p className='productdisplay-right-category'><span>Tags :</span> Modern , Latest </p>
    </div>
    </div>
  )
}

export default ProductDisplay
