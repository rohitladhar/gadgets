import axios from 'axios';
const { MOBILE_LIST_REQUEST, MOBILE_LIST_SUCCESS, MOBILE_LIST_FAIL, MOBILE_DETAILS_REQUEST,
    MOBILE_DETAILS_SUCCESS, MOBILE_DETAILS_FAIL, BRAND_LIST_REQUEST, BRAND_LIST_SUCCESS, 
    BRAND_LIST_FAIL } = require("../constants/mobileConstant");
const listMobiles = (name) => async (dispatch) => {
    try {
        dispatch({ type: MOBILE_LIST_REQUEST, payload:name });
        const { data } = await axios.get("/api/mobile/" +name);
        dispatch({ type: MOBILE_LIST_SUCCESS, payload: data });
        console.log(data)
    }
    catch (error) {
        dispatch({ type: MOBILE_LIST_FAIL, payload: error.message });
    }
}
const listBrand = (name) => async (dispatch) => {
    try {
        dispatch({ type: BRAND_LIST_REQUEST, payload:name });
        const { data } = await axios.get("/api/brand/" +name);
        dispatch({ type: BRAND_LIST_SUCCESS, payload: data });
        console.log(data)
    }
    catch (error) {
        dispatch({ type: BRAND_LIST_FAIL, payload: error.message });
    }
}

const detailMobile = (id) => async (dispatch) => {
    try {
        dispatch({ type: MOBILE_DETAILS_REQUEST, payload: id })
        const { data } = await axios.get("/api/mobile/" + id)
        dispatch({ type: MOBILE_DETAILS_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: MOBILE_DETAILS_FAIL, payload: error.message })
    }
}
export { listMobiles, detailMobile,listBrand };