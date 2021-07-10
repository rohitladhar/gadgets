import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Modal} from './Modal.js';
import { listMobiles,listBrand } from '../actions/mobileActions';
function MobileScreen(props) {
    const [show,setShow]=useState(false);
    const [mobileId,setMobileId]=useState(0);
    const name = props.location.search.slice(1);
    const closeModal=()=>setShow(false);
    const brandList = useSelector(state => state.brandList)
    const { brand,loadingb } = brandList;
    const mobileList = useSelector(state => state.mobileList)
    const { mobiles,loading,error } = mobileList;
    const productDetail=(mobiledisplay)=>{
        setShow(true)
        setMobileId(mobiledisplay.id)
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listBrand(name));
        dispatch(listMobiles(name));

        return () => {
            //
        }
    }, [name])
    return <div>
        {show ? <div onClick={closeModal} className="modal-drop">
        <Modal show={show} closeModal={closeModal} mobileId={mobileId}/>
        </div>:null}
        <div className="mobile">
            <div className="mobile-list">
                <ul className="mobile-list-container">
                {brand?.map(brandname =>
                    <li key={brandname.id}>
                    <div className="mobile-item">
                        <img src={brandname.imgsrc} alt="1" />
                    </div>
                    <div className="mobile-item">
                        Company Name:-{brandname.name}<br/><hr/>
                        Company CEO:-{brandname.ceo}
                    </div>
                    <div className="mobile-item">
                        Headquater:-{brandname.headquater}<br/><hr/>
                        Tagline:-{brandname.tagline}
                    </div>
                </li>
                )
            }
            </ul>
        </div>
    </div>
<div>
<ul className="products">
        
    {mobiles?.map(mobile =>
        <li key={mobile.id}>
            <div className="product">
                
                    <img className="product-image" src={mobile.imgsrc} alt="1" />
                
                <div className="product-name">
                    {mobile.model}
                </div>
                <div className="product-brand">{mobile.name}</div>
                <div className="product-price">${mobile.price}</div>
                <div>
                    <button type="button" className="contact-button" onClick={()=>productDetail(mobile)} >Click</button>
                    
                </div>  
            </div>
        </li>
    )
    }

</ul>
</div>
</div>
}
export default MobileScreen