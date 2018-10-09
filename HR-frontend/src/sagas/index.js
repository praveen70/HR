import { all , spawn } from "redux-saga/effects";
import { fetchData, employeeDataPost, DesignationUpdate, 
    fetchEmployeeDataUpdate, fetchSalaryComponentDataUpdate, employeeDataPostUpdate
 } from './sagas';




export default function* rootSaga() {
    yield all([
        spawn(fetchData),
        spawn(employeeDataPost),
        spawn(DesignationUpdate),
        spawn(fetchEmployeeDataUpdate),
        spawn(fetchSalaryComponentDataUpdate),
        spawn(employeeDataPostUpdate)
    
    ])
  }
  


