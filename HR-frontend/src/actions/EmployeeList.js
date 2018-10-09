import { FETCH_EMPLOYEELIST, FETCH_EMPLOYEELIST_SUCCESS } from "./actionsType";


export function fetchEmployeelist(name){
    console.log("fetchemployeeList", name);
    return{
        type: FETCH_EMPLOYEELIST,
        name,
    }
};


export function fetchEmployeeSuccess( EmpData){
    console.log("fetchEmployeeSuccess", EmpData);
    return {
        type: FETCH_EMPLOYEELIST_SUCCESS,
        EmpData,
    }
}
