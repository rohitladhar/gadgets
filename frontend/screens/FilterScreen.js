import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { filterMobiles,filterResult } from '../actions/filterActions';

function FilterScreen(props) {
    
    const [price,onPriceChange]=useState();
    const [ram,onRamChange]=useState();
    const [battery,onBatteryChange]=useState();
    const [rom,onRomChange]=useState();
    const [brand,onBrandChange]=useState();
    const filterMobile = useSelector(state => state.filterMobile)
    const { mobiles,loadingc,error } = filterMobile;
    const filterBrand = useSelector(state => state.filterBrand)
    const { mobileBrand } = filterBrand;
    const dispatch = useDispatch();
   
    useEffect(() => {
        if(brand)
            dispatch(filterResult(brand))
        
        dispatch(filterMobiles())
 
    }, [brand])

    

    return <div className="filter">  
    <div className="filter-list">
        <ul className="filter-list-container">
            <li>
                <div className="filter-item-left">
                <div className="filter-item">
                        BRAND<br/><hr/>
                        <select name="brand" value={ brand} onChange={(e)=>{onBrandChange(e.target.value)}}>
                            <option value="#">Select a Brand</option>
                            <option value="RealMe">RealMe</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Oppo">Oppo</option>
                            <option value="Vivo">Vivo</option>
                            <option value="Honor">Honor</option>
                            <option value="Huawei">Huawei</option>
                            <option value="Apple">Apple</option>
                            <option value="Honor">Honor</option>
                            <option value="Lenovo">Lenovo</option>
                            <option value="Oneplus">Oneplus</option>
                            <option value="Motorola">Motorola</option>
                            <option value="Xiaomi">Xiaomi</option>
                        </select>
                    </div>
                    <div className="filter-item">
                        PRICE<br/><hr/>
                        <input type="radio"  name="price"
                            value="10000"
                            checked={price==="10000"}
                            onChange={(e)=>{onPriceChange(e.target.value)}} />  10000<br/>

                        <input type="radio"  name="price"
                            value="20000"
                            checked={price==="20000"}
                            onChange={(e)=>{onPriceChange(e.target.value)}} />  20000<br/>
                   
                        <input type="radio"  name="price"
                            value="30000"
                            checked={price==="30000"}
                            onChange={(e)=>{onPriceChange(e.target.value)}} />  30000<br/>

                        <input type="radio"  name="price"
                            value="50000"
                            checked={price==="50000"}
                            onChange={(e)=>{onPriceChange(e.target.value)}} /> Upto 30000<br/>
    
                    </div>
                    <div className="filter-item">
                        RAM<br/><hr/>
                        <input type="radio"  name="ram"
                            value="2"
                            checked={ ram==="2"}
                            onChange={(e)=>{onRamChange(e.target.value)}}/>  2 RAM<br/>

                        <input type="radio"  name="ram"
                            value="3"
                            checked={ ram==="3"}
                            onChange={(e)=>{onRamChange(e.target.value)}} />  3 RAM<br/>

                        <input type="radio"  name="ram"
                            value="4"
                            checked={ ram==="4"}
                            onChange={(e)=>{onRamChange(e.target.value)}} />  4 RAM<br/>

                        <input type="radio"  name="ram"
                            value="6"
                            checked={ ram==="6"}
                            onChange= {(e)=>{onRamChange(e.target.value)}} />6 RAM<br/>

                        <input type="radio"  name="ram"
                            value="8"
                            checked={ ram==="8"}
                            onChange= {(e)=>{onRamChange(e.target.value)}} />8 RAM<br/>
                    </div>
                    <div className="filter-item">
                        ROM<br/><hr/>
                        <input type="radio"  name="rom"
                            value="16"
                            checked={ rom==="16"}
                            onChange= {(e)=>{onRomChange(e.target.value)}} />  16 ROM<br/>

                        <input type="radio"  name="rom"
                            value="32"
                            checked={ rom==="32"}
                            onChange= {(e)=>{onRomChange(e.target.value)}} />  32 ROM<br/>

                        <input type="radio"  name="rom"
                            value="64"
                            checked={ rom==="64"}
                            onChange= {(e)=>{onRomChange(e.target.value)}} />  64 ROM<br/>

                        <input type="radio"  name="rom"
                            value="128"
                            checked={ rom==="128"}
                            onChange= {(e)=>{onRomChange(e.target.value)}} />128 ROM<br/>

                        <input type="radio"  name="rom"
                            value="256"
                            checked={ rom==="256"}
                            onChange= {(e)=>{onRomChange(e.target.value)}} />256 ROM<br/>
                    </div>
                    <div className="filter-item">
                        BATTERY<br/><hr/>
                        <input type="radio"  name="battery"
                            value="4000"
                            checked={ battery==="4000"}
                            onChange={ (e)=>{onBatteryChange(e.target.value)}} />  4000 mAh<br/>

                        <input type="radio"  name="battery"
                            value="4500"
                            checked={ battery==="4500"}
                            onChange={ (e)=>{onBatteryChange(e.target.value)}} />  4500 mAh<br/>

                        <input type="radio"  name="battery"
                            value="5000"
                            checked={ battery==="5000"}
                            onChange={ (e)=>{onBatteryChange(e.target.value)}} />  5000 mAh<br/>

                        <input type="radio"  name="battery"
                            value="6000"
                            checked={ battery==="6000"}
                            onChange={ (e)=>{onBatteryChange(e.target.value)}} />6000 mAh<br/>

                        <input type="radio"  name="battery"
                            value="7000"
                            checked={ battery==="7000"}
                            onChange={ (e)=>{onBatteryChange(e.target.value)}} />7000 mAh<br/>
                    </div>
                    
                </div>
                <div className="filter-item-right">
                    {!brand ? (<ul className="filter-mobiles">
                        
                        {mobiles?.map(mobile =>
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
                    </ul>):
                    (<ul className="filter-mobiles">
                        
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
                    </ul>)}
                    
                    
                </div>
            </li>
            </ul>
        </div>
        </div>
        
}
export default FilterScreen;