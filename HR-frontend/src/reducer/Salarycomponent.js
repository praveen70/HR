import {
    FETCH_SALARYCOMPONENT_SUCCESS
} from '../actions/actionsType';



const initialState ={
    SalaryComponent: []
};


export default function salaryComponentFetch (state = initialState, action={}){
    //console.log('designationDataFetch');
    switch(action.type){
        case FETCH_SALARYCOMPONENT_SUCCESS:
            //console.log("FETCH_DESIGNATION_SUCCESS called", action.payload);
            if ( action.payload && action.payload.data ) {
                return {...state, SalaryComponent: action.payload.data }
            }
            return state;
          
        default:
            return state;
    }
    
}