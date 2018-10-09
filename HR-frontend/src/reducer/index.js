import { combineReducers } from "redux";
 
// import { rootReducer  }  from "react-router-redux";
import dropdown from './Drop.reducer';
import employeePost from './Employee';
import designationDataFetch from './Designation';
import fetchEmployeelist from './EmployeeList';
import salaryComponentFetch from './Salarycomponent';



const rootReducer = combineReducers({
    dropdown,
    employeePost,
    designationDataFetch,
    fetchEmployeelist, 
    salaryComponentFetch
    
    
});

export default rootReducer;