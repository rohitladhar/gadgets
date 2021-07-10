import {
    MOBILE_LIST_REQUEST, MOBILE_LIST_SUCCESS, MOBILE_LIST_FAIL, MOBILE_DETAILS_REQUEST,
    MOBILE_DETAILS_SUCCESS, MOBILE_DETAILS_FAIL, BRAND_LIST_REQUEST, BRAND_LIST_SUCCESS, BRAND_LIST_FAIL
} from '../constants/mobileConstant';

function mobileListReducer(state = { mobiles: [] }, action) {
    switch (action.type) {
        case MOBILE_LIST_REQUEST:
            //i am going to send a request to server to get a list of MOBILEs
            return { loading: true };
        case MOBILE_LIST_SUCCESS:
            // i get the data from server and return set data(MOBILEs) to action.payload
            return { loading: false, mobiles: action.payload};
            
        case MOBILE_LIST_FAIL:
            //MOBILE list failed, show error
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
function brandListReducer(state = { brand: [] }, action) {
    switch (action.type) {
        case BRAND_LIST_REQUEST:
            //i am going to send a request to server to get a list of MOBILEs
            return { loadingb: true };
        case BRAND_LIST_SUCCESS:
            // i get the data from server and return set data(MOBILEs) to action.payload
            return { loadingb: false, brand: action.payload};
            
        case BRAND_LIST_FAIL:
            //MOBILE list failed, show error
            return { loadingb: false, error: action.payload }
        default:
            return state;
    }
}

function mobileDetailsReducer(state = { mobile: {} }, action) {
    switch (action.type) {
        case MOBILE_DETAILS_REQUEST:
            //i am going to send a request to server to get a list of MOBILEs
            return { loading: true };
        case MOBILE_DETAILS_SUCCESS:
            // i get the data from server and return set data(MOBILE) to action.payload
            return { loading: false, mobile: action.payload };
        case MOBILE_DETAILS_FAIL:
            //MOBILE list failed, show error
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
export { mobileListReducer, mobileDetailsReducer,brandListReducer }