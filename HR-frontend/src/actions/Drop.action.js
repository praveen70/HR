import { FETCH_DEPARTMENTS} from "./actionsType";

export function fetchDepartments(name, dispatch){
    console.log('Drop.action fetchDepartments');
    return {
        type: FETCH_DEPARTMENTS,
        name,
    };
}