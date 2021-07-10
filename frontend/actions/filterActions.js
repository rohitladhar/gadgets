import axios from 'axios';
const { MOBILES_LIST_REQUEST, MOBILES_LIST_SUCCESS, MOBILES_LIST_FAIL,
    MOBILES_BRAND_REQUEST, MOBILES_BRAND_SUCCESS, MOBILES_BRAND_FAIL
} = require("../constants/filterConstant");
const filterMobiles = () => async (dispatch) => {
    try {
        dispatch({ type: MOBILES_LIST_REQUEST });
        const { data } = await axios.get("/api/mobile" );
        dispatch({ type: MOBILES_LIST_SUCCESS, payload: data });
        
    }
    catch (error) {
        dispatch({ type: MOBILES_LIST_FAIL, payload: error.message });
    }
}
const filterResult = (brand) => async (dispatch) => {
    try {
        dispatch({ type: MOBILES_BRAND_REQUEST });
        const { data } = await axios.get("/api/mobile/"+brand
        );
        dispatch({ type: MOBILES_BRAND_SUCCESS, payload: data });
        console.log(data)
    }
    catch (error) {
        dispatch({ type: MOBILES_BRAND_FAIL, payload: error.message });
    }
}

export { filterMobiles,filterResult };