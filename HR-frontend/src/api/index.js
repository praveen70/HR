import axios from 'axios';



// export async function Apabci(action) {
//     console.log("saga api");
//      return await axios({
//       method: 'GET',
//       url: `http://localhost:8080/api/departments/`,
      
      
//     })
//     .then( res => {
//       res.json().then(body => {
//         console.log("xyzz",body)
//       })

//     })
//     // .then(function(response) {
//     //   console.log("response.data",response.data);
//     //   return response.data;
    
//   // });
  
// }

export async function Api() {
  try {
    const response = await axios.get(`http://192.168.2.247:8080/api/departments/`);
    // console.log("Departments API api/indexs.js", response);
    let emptyObj = {
                  companyId:"",
                  createdBy:"",
                  deptId:"",
                  deptName:"",
                  modifiedBy:"",
                  status:1
                };
    response.data.push(emptyObj); 
    // console.log("Empty  Departments API api/indexs.js", response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
}


export async function empApi(data) {
  //console.log("empapi calling", data);
  try {
    const response = await axios.post(`http://192.168.2.247:8080/api/employees/`, data);
    //console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function desigApi() {
console.log("desigApi calling");
  try {
    const response = await axios.get(`http://192.168.2.247:8080/api/designations/`);
    // console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function emplistApi() {
  // console.log("empListApi calling");
  try {
    const response = await axios.get(`http://192.168.2.247:8080/api/employees/`);
    ///console.log("from api page response employees",response);
    return response;
  } catch (error) {
    console.error(error);
  }
}


export async function salaryComponentApi() {
  //console.log("empListApi calling");
  try {
    const response = await axios.get(`http://192.168.2.247:8080/api/salaryComponents/`);
    //console.log("from api page response salaryComponents",response);
    return response;
  } catch (error) {
    console.error(error);
  }
}


export async function updateEmployeeApi() {
  //console.log("empListApi calling");
  try {
    const response = await axios.put(`http://192.168.2.247:8080/api/employees/:employeesId`);
    //console.log("from api page response salaryComponents",response);
    return response;
  } catch (error) {
    console.error(error);
  }
}