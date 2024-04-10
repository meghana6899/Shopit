import React from 'react';
import './Descriptionbox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet and serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their conventional accessibility, and the gloal reach they offer.</p>
                <p>E-commerce websites typically display products or services along with detailed descriptions, images, picturess, and any avaialable variations. each product usually has its own dedicated page with relevant informations</p>
            </div>
        </div>
    )
}

export default DescriptionBox