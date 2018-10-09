import {
    FETCH_EMPLOYEELIST, 
    FETCH_EMPLOYEELIST_SUCCESS
} from '../actions/actionsType';

const initialState = {
    employeeData:[]
    
}

export default function fetchEmployeelist(state = initialState, action= {})  {
    //console.log("fetchEmoloyelist");
    switch(action.type){
        case FETCH_EMPLOYEELIST_SUCCESS:
       //console.log("FETCH_EMPLOYEELIST_SUCCESS called", action);
       if ( action.payload && action.payload.data ) {
        return {...state, employeeData: action.payload.data }
    }
    return state;
        
        default:
            return state;
    }
};


// export default function fetchlist(state = initialState, action= {})  {
//     console.log("fetchEmoloyelist");
//     switch(action.type){
//         case FETCH_EMPLOYEELIST:
//         console.log("FETCH_EMPLOYEELIST called", action);
//         return {...state, employeeDataList: action.payload }
//         default:
//             return state;
//     }
// };