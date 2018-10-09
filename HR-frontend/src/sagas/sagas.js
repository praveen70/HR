// import { fetchDepartments, FETCH_DEPARTMENTS, FETCH_DEPARTMENTS_SUCCESS } from  '../actions/Drop.action';
import { FETCH_DEPARTMENTS, FETCH_DEPARTMENTS_SUCCESS } from  '../actions/actionsType';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  POSTING_EMPLOYEE_INFORMATION, 
 POSTING_EMPLOYEE_INFORMATION_SUCCESS, 
 POSTING_EMPLOYEE_INFORMATION_FAILD,
 UPDATING_EMPLOYEE_INFORMATION
} from '../actions/actionsType';
import {
  FETCH_DESIGNATION, 
  FETCH_DESIGNATION_SUCCESS
} from '../actions/actionsType';
import { FETCH_EMPLOYEELIST, FETCH_EMPLOYEELIST_SUCCESS} from  '../actions/actionsType';
import {
  FETCH_SALARYCOMPONENT_SUCCESS
} from '../actions/actionsType'

 import api, { Api, empApi, desigApi, emplistApi, salaryComponentApi, updateEmployeeApi }  from '../api';

//  console.log("empapi from saga pages", empApi)
 

// console.log("url", emplistApi);


export function* fetchData(){
  //console.log("fetchData called")
  yield takeLatest(FETCH_DEPARTMENTS, updateUI);
}


export function* updateUI(){
  //console.log("updateUI");
  try{
      const data = yield call (Api);
      if( data ){
        //console.log("updateUI::data", data);
      // yield call({type: "FETCH_DEPARTMENTS_SUCCESS", payload : data  })
      yield put({ type: FETCH_DEPARTMENTS_SUCCESS, payload: data.data });
      }
      
  }catch(err){
    yield put ({ type: "data", payload: err })
  }
  

}


export function* employeeDataPost(){
  //console.log("employeeDataPost")
  yield takeLatest( POSTING_EMPLOYEE_INFORMATION, EmployeeDataUpdate);
}

export function* EmployeeDataUpdate(action){
  //console.log("EmployeeDataUpdate", action);
  try{
      const EmpData = yield call (empApi, action.payload);
      if( EmpData ){
       // console.log("EmployeeDataUpdate::data", EmpData);
      
      yield put({ type: POSTING_EMPLOYEE_INFORMATION_SUCCESS, payload: EmpData });
      //console.log()
      }
      
  }catch(err){
    yield put ({ type: "Emp", payload: err })
  }
  

}

export function* designatioDataGet(){
  //console.log("FETCH_DESIGNATION from saga")
  yield takeLatest( FETCH_DESIGNATION, DesignationUpdate);
}

export function* DesignationUpdate(){
  console.log("updateUI");
  try{
      const desig = yield call (desigApi);
      if( desig ){
        //console.log("updateUI::data", desig);
      // yield call({type: "FETCH_DEPARTMENTS_SUCCESS", payload : data  })
      yield put({ type: FETCH_DESIGNATION_SUCCESS, payload: desig });
      }
      
  }catch(err){
    yield put ({ type: "data", payload: err })
  }
  

}

export function* fetchEmployeeData(){
  //console.log("fetchEmployeeData from saga")
  yield takeLatest(FETCH_EMPLOYEELIST, fetchEmployeeDataUpdate);
}



export function* fetchEmployeeDataUpdate(){
  //console.log("saga::fetchEmployeeDataUpdate");
  try{
      const Empdata = yield call (emplistApi);
      if( Empdata ){
        //console.log("fetchEmployeeDataUpdate::data", Empdata);
      // yield call({type: "FETCH_DEPARTMENTS_SUCCESS", payload : data  })
      yield put({ type: FETCH_EMPLOYEELIST_SUCCESS, payload: Empdata });
      }
      
  }catch(err){
    yield put ({ type: "data", payload: err })
  }
  

}

export function* fetchSalaryComponentData(){
  //console.log("fetchSalaryComponentData");
  yield takeLatest("fetchSalaryComponentData", fetchSalaryComponentDataUpdate)
}

export function* fetchSalaryComponentDataUpdate(){
  //console.log("saga::fetchEmployeeDataUpdate");
  try{
      const salaryComponendata = yield call (salaryComponentApi);
      if( salaryComponendata ){
       // console.log("fetchSalaryComponentDataUpdatee::data", salaryComponendata);
      // yield call({type: "FETCH_DEPARTMENTS_SUCCESS", payload : data  })
      yield put({ type: FETCH_SALARYCOMPONENT_SUCCESS, payload: salaryComponendata });
      }
      
  }catch(err){
    yield put ({ type: "data", payload: err })
  }
  

}





export function* employeeDataPostUpdate(){
  //console.log("employeeDataPost")
  yield takeLatest( POSTING_EMPLOYEE_INFORMATION, EmployeeDataPostUpdate);
}

export function* EmployeeDataPostUpdate(action){
  //console.log("EmployeeDataUpdate", action);
  try{
      const EmpDataUpdate = yield call (updateEmployeeApi, action.payload);
      if( EmpDataUpdate ){
       // console.log("EmployeeDataUpdate::data", EmpData);
      
      yield put({ type: UPDATING_EMPLOYEE_INFORMATION, payload: EmpDataUpdate });
      //console.log()
      }
      
  }catch(err){
    yield put ({ type: "Emp", payload: err })
  }
  

}










