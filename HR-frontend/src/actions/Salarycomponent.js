import { FETCH_SALARYCOMPONENT_SUCCESS } from "./actionsType";

export function fetchSalaryComponent(name){
    console.log("FETCH_SALARYCOMPONENT_SUCCESS");
    return{
        type: FETCH_SALARYCOMPONENT_SUCCESS,
        name,
    }
}