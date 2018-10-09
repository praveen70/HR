import {
     POSTING_EMPLOYEE_INFORMATION, 
    POSTING_EMPLOYEE_INFORMATION_SUCCESS, 
    POSTING_EMPLOYEE_INFORMATION_FAILED,
    UPDATING_EMPLOYEE_INFORMATION
} from '../actions/actionsType';


const initialState = {
 employees: [],
 error:[], 
 updateEmployee:[],
};

export default function employeePost (state = initialState, action={}){
    //console.log("employeePost01");
    switch (action.type){
        case POSTING_EMPLOYEE_INFORMATION:
        //console.log("employeePost", action);
                return {  ...state };
        case POSTING_EMPLOYEE_INFORMATION_SUCCESS:
            return { ...state, employee:action.payload }
        case POSTING_EMPLOYEE_INFORMATION_FAILED:
            return { ...initialState, error:action.payload };

        case UPDATING_EMPLOYEE_INFORMATION:
            return   { ...state, updateEmployee:action.payload }


        default:
            return state;
    }

};