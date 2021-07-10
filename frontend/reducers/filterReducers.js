import {
    MOBILES_LIST_REQUEST, MOBILES_LIST_SUCCESS, MOBILES_LIST_FAIL,
    MOBILES_BRAND_REQUEST, MOBILES_BRAND_SUCCESS, MOBILES_BRAND_FAIL
} from '../constants/filterConstant';

function filterMobilesReducer(state = { allMobiles: [] }, action) {
    switch (action.type) {
        case MOBILES_LIST_REQUEST:
            //i am going to send a request to server to get a list of MOBILEs
            return { loadingc: true };
        case MOBILES_LIST_SUCCESS:
            // i get the data from server and return set data(MOBILEs) to action.payload
            return { loadingc: false, mobiles: action.payload};
        case MOBILES_LIST_FAIL:
            //MOBILE list failed, show error
            return { loadingc: false, error: action.payload }
        default:
            return state;
    }
}
function filterBrandReducer(state = { allMobiles: [] }, action) {
    switch (action.type) {
        case MOBILES_BRAND_REQUEST:
            //i am going to send a request to server to get a list of MOBILEs
            return { loadingc: true };
        case MOBILES_BRAND_SUCCESS:
            // i get the data from server and return set data(MOBILEs) to action.payload
            return { loadingc: false, mobiles: action.payload};
        case MOBILES_BRAND_FAIL:
            //MOBILE list failed, show error
            return { loadingc: false, error: action.payload }
        default:
            return state;
    }
}

export { filterMobilesReducer,filterBrandReducer }