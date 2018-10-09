import React from "react";
import ReactDOM from "react-dom";
import { postEmployeeData, updatingEmployeeInformation } from '../../actions/Employee';
import { fetchDepartments } from '../../actions/Drop.action';
import { fetchDesignation, fetchDesignationDataSuccess } from '../../actions/Designation';
import { fetchEmployeelist, fetchEmployeeSuccess } from '../../actions/EmployeeList';
import { connect } from 'react-redux';


class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
 
    
     this.changeInput = this.changeInput.bind(this);
  }

 




  componentDidMount(){
    console.log("componentDidMount::this.props",this.props);

    console.log("window.location.href");
     this.props.fetchDepartments()
      this.props.fetchDesignationDataSuccess()
     this.props.fetchEmployeeSuccess()
    // console.log("componentDidMount employee is", this.props.location.state.empSingleData);
    // const user = this.props.location.state.empSingleData;
    
    // console.log("componentDidMount1000 employee is",  user);
    // this.setState({...this.state, ...user});
    // console.log("this.state componentDidmount", this.state);
     

    // console.log("this.props.empSingleData",this.props.empSingleData);

     
     //console.log("this.props.fetchEmployeeSuccess()", this.props.fetchEmployeeSuccess());
     //console.log("this.props.fetchDesignation()", this.props.fetchDesignation());
    //  console.log("this.props.fetchDesignation()", this.props.fetchDesignationDataSuccess());
    // this.props.postEmployeeData()

  }


  // componentDidMount(){
  //   console.log("componentDidMount::this.props",this.props);
  //   this.props.fetchDepartments()
  //   // setTimeout( () => {
  //   //     this.props.fetchDepartments();
  //   //   console.log("fk");
  //   // }, 3000 )
  // }


  changeInput( field, value ) {
    console.log("field, value",field, value);
    this.setState({ [field]: value });
  }



  handleSumbit = (e) => {
    e.preventDefault();
    const data = this.state;
    //console.log('handleSumbit::data', data);
    //if empId tis there
    this.props.postEmployeeData(data, this.state)
    //else
    // this.props.updatingEmployeeInformation(data)
    
  }


  

    

  render() {
    // console.log("dhruv", this.props, this.state);
    // console.log("this.props.employee.employeeData222", this.props.employee.employeeData);
    // // console.log("this.props.fetchEmployeeSuccess()", this.props.fetchEmployeeSuccess());
    // console.log("this.props.state.drodpwon.departments from employee:::page", this.props.state.dropdown.departments);
    // console.log("this.props.state.designations from employee120:::page", this.props.state);
    // console.log("this.props.state.employees", this.props.state.employees);
    // console.log("designation.designation",this.props.designation);
    // console.log("this.props.match.params.id",this.props.match.params.id);
    let employee = this.props.employee.employeeData.find( item => {
      return item.EmpId === this.props.match.params.id
    } );
    if ( ! employee ) { employee = {}; }
    // const emp = employee;
    //  console.log("employee is", employee);
    //  console.log("employee is :: employee.EmpId", employee.EmpId);
     


    return (
     <form onSumbit={this.handleSumbit} >
      <div className="col-md-12">
      
    <div className="col-md-12">
    <div className="justify-content-md-center ">
      <div className="container col-md-8 create-form">
      
      {/* { console.log("praveen is", employee) } */}
      
     
     
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="empid"> Emp Id&nbsp;<span className="mandatory">*</span>
            
            </label>
            <div className="col-md-4">
              <input 
              id="empid" 
              type="text"
              name="empid" 
              className="form-control" 
              required="required"
              // onChange={this.filedaInputChange}
              onChange={ (e) => { this.changeInput("EmpId", e.target.value) } }
              // value={this.state.EmpId}
              defaultValue={ employee.EmpId }
              
              

                maxlength="10"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="firstname">

              First Name&nbsp;<span className="mandatory">*:</span>
            </label>
            <div className="col-md-4">
              <input id="firstname" type="text" 
              name="firstname" 
              className="form-control" 
              required="required" 
              onChange={ (e) => { this.changeInput("FirstName", e.target.value) } }
              //value={this.state.FirstName}
              defaultValue={ employee.FirstName }
                maxlength="20"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="middilename">
              Middile Name:
            </label>
            <div className="col-md-4">
            
              <input
                id="middilename"
                type="text"
                name="middilename"
                className="form-control"
                maxlength="20"
                required="required"
                onChange={ (e) => { this.changeInput("MiddileName", e.target.value) } }
                //value={this.state.MiddileName}
                defaultValue={ employee.MiddileName }
                
              />
            </div>
          </div>
      
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="lastname">
              Last Name:
            </label>
            <div className="col-md-4">
            
              <input
                id="lastname"
                type="text"
                name="lastname"
                className="form-control"
                maxlength="20"
                required="required"
                onChange={ (e) => { this.changeInput("LastName", e.target.value) } }
                value={this.state.LastName}
                defaultValue={ employee.LastName }
                
                
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="title">
              Title:
            </label>
            <div className="col-md-4">
            
              <input
                id="title"
                type="text"
                name="title"
                className="form-control"
                maxlength="20"
                required="required"
                onChange={ (e) => { this.changeInput("Title", e.target.value) } }
                //value={this.state.Title}
                defaultValue={ employee.Title }
                
              />
            </div>
          </div>
          <div className="form-group row">
          <label className="col-sm-2 col-form-label" for="gender">
            Gender:
          </label>
          <div className="col-md-4"
          onChange={ (e) => { this.changeInput("Gender", e.target.value) } }
          //value={this.state.Gender}
          defaultValue={ employee.Gender }
          >
           <a >
              <div class="row">
              <div class="col-sm-3 col-xs-3 col-md3"><input type="radio" name="gender" id="male" value="male" /><label for="male">&nbsp;Male</label></div>
              <div class="col-sm-3 col-xs-3 col-md3"><input type="radio" name="gender" id="female" value="female" /><label for="female">&nbsp;Female</label></div>
              <div class="col-sm-3 col-xs-3 col-md3"><input type="radio" name="gender" id="others" value="other" /><label for="others">&nbsp;Other</label></div>
              </div>
            </a>
          </div>
        </div>
        
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="dateofbirth">
            Date of Birth&nbsp;<span className="mandatory">*:</span>
          </label>
          <div className="col-md-4">
          <div className='dateofbirth'>
            <input
              id="DOB"
              type="date"
              name="dateofbirth"
              className="form-control"
              onChange={ (e) => { this.changeInput("DOB", e.target.value) } }
              //value={this.state.dateofbirth}
              defaultValue={ employee.DOB }
              
             
            />
            </div>
          </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="qualification">
              Qualification:
            </label>
            <div className="col-md-4">
            
              <input
                id="qualification"
                type="text"
                name="qualification"
                className="form-control"
                maxlength="20"
                required="required"
                onChange={ (e) => { this.changeInput("QualID", e.target.value) } }

                //value={this.state.QualID}
                defaultValue={ employee.QualID }
                
              />
            </div>
          </div>
          <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="experience">
            Experience &nbsp;<span className="mandatory">*:</span>
          </label>
          <div className="col-md-4">
            <input
            id="experience"
              type="text"
              name="experience"
              maxlength="10"
              className="form-control"
              onChange={ (e) => { this.changeInput("Experience", e.target.value) } }
              //value={this.state.Experience}
              defaultValue={ employee.Experience }
              
              
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="bloodgroup">
            Bloodgroup &nbsp;<span className="mandatory">*:</span>
          </label>
          <div className="col-md-4">
            <input
            id="bloodgroup"
              type="text"
              name="Bloodgroup"
              maxlength="10"
              className="form-control"
              onChange={ (e) => { this.changeInput("BloodGroup", e.target.value) } }
             // value={this.state.BloodGroup}
              defaultValue={ employee.BloodGroup }
              
            />
          </div>
        </div>

            <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="jobtitle">
          Designation:
          </label>
          <div className="col-md-4"
          id="Designation"
          type="text"
          name="Designation"
           onChange={ (e) => { this.changeInput("DesgtID", e.target.value) } }
          // value={this.state.DesgtID}
           defaultValue={ employee.DesgtID }
           >
             <select id="department" className="form-control" onChange={ () => {} }>
              <option value="NON SELECTED">NON SELECTED</option>
              { this.props.designation.map( (item,index) => {
                console.log("item",item)
                return <option key={index} value={item.desgName}>{ item.desgName }</option>
              } ) }

            </select>
          </div>
        </div>
       
        <div className="form-group row"
        >
          <label className="col-sm-2 col-form-label" htmlFor="department">
            Department:
          </label>
          <div className="col-md-4"
          onChange={ (e) => { this.changeInput("DeptID", e.target.value) } }
          //value={this.state.DeptID}
          defaultValue={ employee.DeptID }
          >



            <select id="department" className="form-control" onChange={ () => {} }>
              <option value="NON SELECTED">NON SELECTED</option>
              { this.props.state.dropdown && this.props.state.dropdown.departments && this.props.state.dropdown.departments.map( (item,index) => {
                console.log("item",item)
                return <option key={index} value={item.deptName}>{ item.deptName }</option>
              } ) }

            </select>
            
            <i className="far fa-edit"></i>
          </div>
        </div>
      
       
      
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="presentaddress">
            Present Address&nbsp;<span className="mandatory">*:</span>
          </label>
          <div className="col-md-4">
            <input
              id="presentaddress"
              type="text"
              name="Presentaddress"
              max="100"
              className="form-control"
              onChange={ (e) => { this.changeInput("PresentAddress", e.target.value) } }
              //value={this.state.PresentAddress}
              defaultValue={ employee.PresentAddress }
              
              
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="permanentaddress">
            Permanent Address&nbsp;<span className="mandatory">*:</span>
          </label>
          <div className="col-md-4">
            <input
              id="permanentaddress"
              type="text"
              name="permanentaddress"
              max="100"
              className="form-control"
              onChange={ (e) => { this.changeInput("PermanentAddress", e.target.value) } }
             // value={this.state.PermanentAddress}
              defaultValue={ employee.PermanentAddress }
              
              
            />
          </div>
        </div>

          <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="Mobile">
            Mobile &nbsp;<span className="mandatory">*:</span>
          </label>
          <div className="col-md-4">
            <input
              id=" Mobile"
              type="integer"
              name=" Mobile"
              max="10"
              className="form-control"
              onChange={ (e) => { this.changeInput("Mobile", e.target.value) } }
              //value={this.state.Mobile}
              defaultValue={ employee.Mobile }
              
              
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="DOJ">
          DOJ &nbsp;<span className="mandatory">*:</span>
          </label>
          <div className="col-md-4">
            <input id="DOJ" type="date" name="DOJ" className="form-control"  onChange={ (e) => { this.changeInput("DOJ", e.target.value) } }
              // value={this.state.DOJ}
              defaultValue={ employee.DOJ }
              
              
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label" htmlFor="EmailId">
          EmailId &nbsp;<span className="mandatory">*:</span>
          </label>
          <div className="col-md-4">
            <input
              id="EmailId"
              type="text"
              name="EmailId"
              max="100"
              className="form-control"
              onChange={ (e) => { this.changeInput("EmailId", e.target.value) } }
              // value={this.state.EmailId}
              defaultValue={ employee.EmailId }
              
              
            />
          </div>
        </div>
    

        
        
        <div className="form-group">
          <label className="col-sm-2 col-form-label" for="button" />
          <div className="col-md-4">
           
            <div className='btn'>
            <button type="Submit"  className="btn btn-success"   onClick = {this.handleSumbit}>
              Submit<i className="glyphicon glyphicon-log-in" />
            </button>
            </div>
           
            <button type="button" className="btn btn-success">
              Cancel<i className="glyphicon glyphicon-log-in" />
            </button>
           
          </div>
        </div>


          </div>
        </div>  
        </div>     
     </div>
     </form>
      
    );
  }
}




const mapStateToProps = (state) => {
  return {
    state: state,
    designation: state.designationDataFetch.designation,
    employee: state.fetchEmployeelist, 
    // updateEmployee:
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postEmployeeData: (data) => { dispatch( postEmployeeData(data) ) },
    fetchDepartments: () => { dispatch( fetchDepartments() ) },
    fetchDesignation: () => { dispatch( fetchDesignation() ) },
    fetchDesignationDataSuccess: () => { dispatch( fetchDesignationDataSuccess() ) },
    fetchEmployeeSuccess: () => { dispatch( fetchEmployeeSuccess() ) },
    // updatingEmployeeInformation: (data) => { dispatch( updatingEmployeeInformation(data) ) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Employee);
