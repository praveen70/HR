import React, { Fragment } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchEmployeelist, fetchEmployeeSuccess } from '../../actions/EmployeeList';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';




class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }

  }

   componentDidMount(){
       console.log("EmployeeList componentDidMount")
       this.props.fetchEmployeeSuccess()
       //console.log("this.props.employee.employeeData", this.props.employee.employeeData);
   }

   empIdLink(cell, row){
       //console.log("cell, row",cell, row);
       //console.log("row.EmpId",row.EmpId);
    
      return(<Link to={{ pathname: `/Employee/${row.EmpId}`,state: {empSingleData: row }}}>{`${row.EmpId}`} </Link> ) 
   
   };

   salaryLink(cell, row){
    //console.log("cell, row",cell, row);
    //console.log("row.EmpId",row.EmpId);
 
   return(<Link to={{ pathname: `/Salarycomponent/${row.EmpId}`,state: {empSingleData: row }}}>
   <span className="fa fa-rupee" title="Configure the salary components">$</span>
    </Link> ) 

};
  


   

  render() {
    console.log("employeeslist", this.props.employee.employeeData);
    return (
      
     <div className="col-md-12">
         <BootstrapTable 
         data={this.props.employee.employeeData} 
         striped={true} hover={true} 
         className="custom-table"
          >

            <TableHeaderColumn width="133" colSpan="1" rowSpan='1'  dataField='EmpId' isKey={true}  dataFormat={ this.empIdLink }>EmpID</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='fullName'  >Full Name</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='DeptID'  >Department</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='DesgtID' >Designation</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='DOJ'  >Date Of Joining</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='Mobile' >Mobile</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='EmailId'>Email</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataFormat={ this.salaryLink }>Action</TableHeaderColumn>
        </BootstrapTable>
        </div>
         
    );
  }
}



const mapStateToProps = (state) => {
    return {
      state: state,
    //   designation: state.designationDataFetch.designation,
    employee: state.fetchEmployeelist
      
    }
  }


  const mapDispatchToProps = (dispatch) => {
    return {
      
        fetchEmployeeSuccess: () => { dispatch( fetchEmployeeSuccess() ) }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
