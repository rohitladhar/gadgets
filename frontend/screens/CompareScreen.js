import React,{useState} from 'react';
import MobileDisplay from '../mobiledata/MobileDisplay';
function CompareScreen(props) {
    const[mobileId1,setMobileId1]=useState();
    const[mobileId2,setMobileId2]=useState();
    const[mobileId3,setMobileId3]=useState();
    const[mobileId4,setMobileId4]=useState();
    const[mobileId5,setMobileId5]=useState();
    const[mobileId6,setMobileId6]=useState();

    return <div className="compare-details">
        <div className="compare-details-info">
            
            <select name='mobile1' onChange={(e) => { setMobileId1(e.target.value) }}>
                <option value="#">Select </option>
                <option value="RealMe">RealMe</option>
                <option value="Samsung">Samsung</option>
                <option value="Oppo">Oppo</option> 
            </select> <br/>
            <select name='mobile2' defaultValue="Select" onChange={(e) => { setMobileId2(e.target.value) }}>
                <option value="">Select</option>
            {MobileDisplay.filter(mobiledisplay => mobiledisplay.name === mobileId1).map(fbb =>
                <option key={fbb.id} value={fbb.model}>{fbb.model}</option>
            )};
            </select>
            <div className="select-bottom">
                {MobileDisplay.filter(mobilename => mobilename.model === mobileId2).map(mobilemodel => 
            
            <table className="table1">
                <tr> 
                    <img className="table-product-image" src={mobilemodel.imgsrc} alt="1" />

                </tr>                
                <tr>
                    <th className="table1-th">
                        Company Name:-
                    </th>
                    <th>
                        {mobilemodel.name}
                    </th>
                </tr>
                <tr>
                    <th>
                        Modal name:-
                    </th>
                    <th>
                        {mobilemodel.model}
                    </th>
                </tr>
                <tr>
                    <th>
                        Modal Price:-
                    </th>
                    <th>
                        {mobilemodel.price}
                    </th>
                </tr>
                <tr>
                    <th>
                        RAM:-
                    </th>
                    <th>
                        {mobilemodel.ram}
                    </th>
                </tr>
                <tr>
                    <th>
                        ROM:-
                    </th>
                    <th>
                        {mobilemodel.rom}
                    </th>
                </tr>
                <tr>
                    <th>
                        Processor:-
                    </th>
                    <th>
                        {mobilemodel.processor}
                    </th>
                </tr>
                <tr>
                    <th>
                        Front Camera:-
                    </th>
                    <th>
                        {mobilemodel.fcam}
                    </th>
                </tr>
                <tr>
                    <th>
                        Back Camera:-
                    </th>
                    <th>
                        {mobilemodel.bcam}
                    </th>
                </tr>
                <tr>
                    <th>
                        Color Variant:-
                    </th>
                    <th>
                        {mobilemodel.colorvariant}
                    </th>
                </tr>
                <tr>
                    <th>
                        Screen Protection:-
                    </th>
                    <th>
                        {mobilemodel.protection}
                    </th>
                </tr>
            </table>
        
            )}
        </div>
        </div>
 
        <div className="compare-details-info">
            
            <select name='mobile3' onChange={(e) => { setMobileId3(e.target.value) }}>
                <option value="#">Select </option>
                <option value="RealMe">RealMe</option>
                <option value="Samsung">Samsung</option>
                <option value="Oppo">Oppo</option> 
            </select> <br/>
            <select name='mobile4' defaultValue="Select" onChange={(e) => { setMobileId4(e.target.value) }}>
                <option value="">Select</option>
            {MobileDisplay.filter(mobiledisplay => mobiledisplay.name === mobileId3).map(fbb =>
                <option key={fbb.id} value={fbb.model}>{fbb.model}</option>
            )};
            </select>
            <div className="select-bottom">
                {MobileDisplay.filter(mobilename => mobilename.model === mobileId4).map(mobilemodel => 
            
            <table className="table1">
                <tr>
                    
                    <img className="table-product-image" src={mobilemodel.imgsrc} alt="1" />
                    
                 
                </tr>                
                <tr>
                    <th className="table1-th">
                        Company Name:-
                    </th>
                    <th>
                        {mobilemodel.name}
                    </th>
                </tr>
                <tr>
                    <th>
                        Modal name:-
                    </th>
                    <th>
                        {mobilemodel.model}
                    </th>
                </tr>
                <tr>
                    <th>
                        Modal Price:-
                    </th>
                    <th>
                        {mobilemodel.price}
                    </th>
                </tr>
                <tr>
                    <th>
                        RAM:-
                    </th>
                    <th>
                        {mobilemodel.ram}
                    </th>
                </tr>
                <tr>
                    <th>
                        ROM:-
                    </th>
                    <th>
                        {mobilemodel.rom}
                    </th>
                </tr>
                <tr>
                    <th>
                        Processor:-
                    </th>
                    <th>
                        {mobilemodel.processor}
                    </th>
                </tr>
                <tr>
                    <th>
                        Front Camera:-
                    </th>
                    <th>
                        {mobilemodel.fcam}
                    </th>
                </tr>
                <tr>
                    <th>
                        Back Camera:-
                    </th>
                    <th>
                        {mobilemodel.bcam}
                    </th>
                </tr>
                <tr>
                    <th>
                        Color Variant:-
                    </th>
                    <th>
                        {mobilemodel.colorvariant}
                    </th>
                </tr>
                <tr>
                    <th>
                        Screen Protection:-
                    </th>
                    <th>
                        {mobilemodel.protection}
                    </th>
                </tr>
            </table>
        
            )}
        </div>
        </div>
        <div className="compare-details-info">
            
            <select name='mobile5' onChange={(e) => { setMobileId5(e.target.value) }}>
                <option value="#">Select </option>
                <option value="RealMe">RealMe</option>
                <option value="Samsung">Samsung</option>
                <option value="Oppo">Oppo</option> 
            </select> <br/>
            <select name='mobile6' defaultValue="Select" onChange={(e) => { setMobileId6(e.target.value) }}>
                <option value="">Select</option>
            {MobileDisplay.filter(mobiledisplay => mobiledisplay.name === mobileId5).map(fbb =>
                <option key={fbb.id} value={fbb.model}>{fbb.model}</option>
            )};
            </select>
            <div className="select-bottom">
                {MobileDisplay.filter(mobilename => mobilename.model === mobileId6).map(mobilemodel => 
            
            <table className="table1">
                <tr>
                    
                    <img className="table-product-image" src={mobilemodel.imgsrc} alt="1" />
                    
                 
                </tr>                
                <tr>
                    <th className="table1-th">
                        Company Name:-
                    </th>
                    <th>
                        {mobilemodel.name}
                    </th>
                </tr>
                <tr>
                    <th>
                        Modal name:-
                    </th>
                    <th>
                        {mobilemodel.model}
                    </th>
                </tr>
                <tr>
                    <th>
                        Modal Price:-
                    </th>
                    <th>
                        {mobilemodel.price}
                    </th>
                </tr>
                <tr>
                    <th>
                        RAM:-
                    </th>
                    <th>
                        {mobilemodel.ram}
                    </th>
                </tr>
                <tr>
                    <th>
                        ROM:-
                    </th>
                    <th>
                        {mobilemodel.rom}
                    </th>
                </tr>
                <tr>
                    <th>
                        Processor:-
                    </th>
                    <th>
                        {mobilemodel.processor}
                    </th>
                </tr>
                <tr>
                    <th>
                        Front Camera:-
                    </th>
                    <th>
                        {mobilemodel.fcam}
                    </th>
                </tr>
                <tr>
                    <th>
                        Back Camera:-
                    </th>
                    <th>
                        {mobilemodel.bcam}
                    </th>
                </tr>
                <tr>
                    <th>
                        Color Variant:-
                    </th>
                    <th>
                        {mobilemodel.colorvariant}
                    </th>
                </tr>
                <tr>
                    <th>
                        Screen Protection:-
                    </th>
                    <th>
                        {mobilemodel.protection}
                    </th>
                </tr>
            </table>
        
            )}
        </div>
        </div>

    </div>

}
export default CompareScreen