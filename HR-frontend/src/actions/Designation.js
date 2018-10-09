import { FETCH_DESIGNATION, FETCH_DESIGNATION_SUCCESS} from "./actionsType";

export function fetchDesignation(name){
    console.log('Desination.action fetchDesignation');
    return {
        type: FETCH_DESIGNATION,
        name,
    };
}

export function fetchDesignationDataSuccess( DesignationType ){
    console.log("postEmployeeData",DesignationType);
    return {
     type: FETCH_DESIGNATION_SUCCESS,
     DesignationType,
    };
 }