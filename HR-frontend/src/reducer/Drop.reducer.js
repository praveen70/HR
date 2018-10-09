import { FETCH_DEPARTMENTS_SUCCESS,FETCH_DEPARTMENTS } from '../actions/actionsType';



const initialState = {
    
    departments: [],
    results:[]
};

export default function dropdown (state = initialState, action={}){
    //console.log('reducer');
    switch(action.type){
        case FETCH_DEPARTMENTS_SUCCESS:
    console.log("FETCH_DEPARTMENTS_SUCCESS called", action);
        return {...state, departments: action.payload }
          
        default:
            return state;
            
    }
    
}

