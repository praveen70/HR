import { POSTING_EMPLOYEE_INFORMATION, 
    POSTING_EMPLOYEE_INFORMATION_SUCCESS, 
    POSTING_EMPLOYEE_INFORMATION_FAILED,
    UPDATING_EMPLOYEE_INFORMATION
} from "./actionsType";


export function postEmployeeData( data ){
   console.log("postEmployeeData :: data", data);
   return {
    type: POSTING_EMPLOYEE_INFORMATION,
    payload: data
   };
}

export function postEmployeeDataSuccess( data ){
    console.log("postEmployeeData",data);
    return {
     type: POSTING_EMPLOYEE_INFORMATION_SUCCESS,
     payload:data
    };
 }

 export function postEmployeeDataFailed( data, dispatch ){
    console.log("postEmployeeData");
    return {
     type: POSTING_EMPLOYEE_INFORMATION_FAILED,
     payload:data
    };
 }
 export function updatingEmployeeInformation( data, dispatch ){
    console.log("postEmployeeData");
    return {
     type: UPDATING_EMPLOYEE_INFORMATION,
     payload:data
    };
 }
 
