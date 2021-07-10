import React from 'react';
export  const BrandScreen=({mobileBrand})=>{
    return<div>
        <ul className="filter-mobiles">
        {mobileBrand?.map(mobile =>
                <li key={mobile.id}>
                    <div className="filter-mobile">
                            <img className="filter-mobile-image" src={mobile.imgsrc} alt="1" />
                        <div className="filter-mobile-name">
                            {mobile.model}
                        </div>
                        <div className="filter-mobile-brand">{mobile.name}</div>
                        <div className="filter-mobile-price">{mobile.price}</div>
                        <div className="filter-mobile-brand">{mobile.rom} ROM & {mobile.ram} RAM</div>
                        <div className="filter-mobile-brand">{mobile.ram} RAM</div>
                        <div className="filter-mobile-brand">{mobile.battery} mAh</div>
                    </div>
                </li>
            )
            }
        </ul>
    </div>
}