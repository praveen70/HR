import {
    FETCH_DESIGNATION, 
    FETCH_DESIGNATION_SUCCESS
} from '../actions/actionsType';


const initialState = {
designation: [],
error: []

};



export default function designationDataFetch (state = initialState, action={}){
    //console.log('designationDataFetch');
    switch(action.type){
        case FETCH_DESIGNATION_SUCCESS:
            //console.log("FETCH_DESIGNATION_SUCCESS called", action.payload);
            if ( action.payload && action.payload.data ) {
                return {...state, designation: action.payload.data }
            }
            return state;
          
        default:
            return state;
    }
    
}
