import React from 'react';
import MobileDisplay from '../mobiledata/MobileDisplay'
export  const Modal=({show,closeModal,mobileId})=>{
    return(
        <div className="model-wrapper"
        style={{
            transform:show?'translateY(0vh)':'translateY(-100vh)',
            opacity:show?'1':'0'
        }}
        >
            <div className="modal-header">
                <p>Ladhar Gadgets</p>
                <span onClick={closeModal} className="close">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">

                        {MobileDisplay.filter(mobilename => mobilename.id === mobileId).map(mobilemodel => (
                        <li>
                            <div className="mobile-details">
                                
                                <div className="mobile-details-image">
                                    <img className="product-image" src={mobilemodel.imgsrc} alt="1" />
                                </div>
                                
                                <div className="mobile-details-info">
                                    <table className="table">
                                    
                                        <tr>
                                            <th>
                                                Company Name
                                            </th>
                                            <th>
                                                {mobilemodel.name}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                Modal name
                                            </th>
                                            <th>
                                                {mobilemodel.model}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                Modal Price
                                            </th>
                                            <th>
                                                {mobilemodel.price}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                RAM
                                            </th>
                                            <th>
                                                {mobilemodel.ram}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                ROM
                                            </th>
                                            <th>
                                                {mobilemodel.rom}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                Processor
                                            </th>
                                            <th>
                                                {mobilemodel.processor}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                Front Camera
                                            </th>
                                            <th>
                                                {mobilemodel.fcam}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                Back Camera
                                            </th>
                                            <th>
                                                {mobilemodel.bcam}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                Color Variant
                                            </th>
                                            <th>
                                                {mobilemodel.colorvariant}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                Screen Protection
                                            </th>
                                            <th>
                                                {mobilemodel.protection}
                                            </th>
                                        </tr>
                                    </table>
                                    
                                </div>
                            </div>
                        
                        </li>
                        ))}
                </div>
                <div className="modal-footer">
                    <button onClick={closeModal} className="btn-cancel">Close</button>
                </div>
            </div>
        </div>
    )
}