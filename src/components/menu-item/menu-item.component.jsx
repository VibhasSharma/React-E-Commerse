import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (      // Destructuring the title, imageUrl and size properties
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`          // Passing the string interpolated value of imageUrl
    }}/>           
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;