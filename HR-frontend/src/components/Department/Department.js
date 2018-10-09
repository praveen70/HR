import React from "react";
import { fetchDepartments } from '../../actions/Drop.action';
import { connect } from 'react-redux';
import './Department.css';
import { Modal, Dialog, Header, Footer, Title, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import ContentEditable from 'react-contenteditable'
import cellEditFactory from 'react-bootstrap-table2-editor';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import { Type } from 'react-bootstrap-table2-editor';
// import BootstrapTable from 'react-bootstrap-table-next';

// import { BootstrapTable , TableHeaderColumn} from 'react-bootstrap-table-next';


class Department extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      show: false,
      ids: [],
      selected: "",
      data: {id:"", value:''},  
      results:[]  
    };
    
    this.handleHide = this.handleHide.bind(this);
   this.checkBox = this.checkBox.bind(this);
   this.inputSelect = this.inputSelect.bind(this);
  //  this.editInput = this.editInput.bind(this);

  }

  
componentDidMount(){
 
  this.props.fetchDepartments()
 
}

// inputField(){
//   console.log("{this.props.state.dropdown.departments}");
//   return(<input type="text" id="input" ></input>)
// }

// editInput(cell, row){
//   console.log("editInput")
//   const editInputSelect = (cell, row, e) => {
//     console.log("CheckBox is Selected", row);
//     const inputId = this.state.ids;
//     console.log("inputI", inputId);

//   }

// };




handleHide() {
  this.setState({ show: false });
}

trashIcon(){
  return(
    <i className="fa fa-trash" aria-hidden="true"></i>)
};

inputSelect( cell, row ){
// console.log("inputSelect", cell, row);
  const InputBoxSelect = (cell, row, e) => {
    // console.log("InputBoxSelect is Selected", row);
    // console.log("InputBoxSelect current value", e.target.value);
    const existingIDs = e.target.value;
    console.log("existingIDs", existingIDs);
    // const existingIDs = this.state.ids;
    // existingIDs.push(row.deptId);
    this.setState({ selected: row.deptId });
  }






if(this.state.selected === row.deptId){
  const dhruv = (cell, row, e) => {
    console.log("DhRUV KSKJSDF",row, e.target.value);
    this.setState({
      data: {
        id: row.deptId,
        value: e.target.value,
      }
    })
  }

  // return(<input type="text" id="myCheck" defaultValue={row.deptName} onClick={ (e) => { InputBoxSelect(cell, row,e) }  }></input>)
    return(<p><input type="text" id="myCheck" defaultValue={row.deptName}  onChange={ (e) => { dhruv(cell, row,e) }  }></input></p>)

  
  }
  else{
    return <p onClick={ (e) => { InputBoxSelect(cell, row,e) }  } >{row.deptName}</p>
  } 
   
  
};



checkBox( cell, row ){
 

  const CheckBoxSelect = (cell, row, e) => {
    // console.log("CheckBox is Selected", row);
    // console.log("CheckBox current value", e.target.value);
    const existingIDs = this.state.ids;
    existingIDs.push(row.deptId);
    this.setState({ ids: existingIDs });
  }
  
  
  return(<input type="checkbox" id="myCheck" onClick={ (e) => { CheckBoxSelect(cell, row,e) }  }></input>)
  
};

render() {
  const rowClasses = (row, rowIndex) => {
    // console.log("rowClasses", rowClasses);
    return 'custom-row-class';
  };
  
  


  const columns = [{
    dataField: 'deptName',
    text: 'Description',
    editor: {
      type: Type.SELECT | Type.TEXTAREA | Type.CHECKBOX | Type.DATE
    }
  }];
  
  
  console.log("render ids", this.state.ids);
  console.log("render selected", this.state.selected);
  console.log("this.state.data", this.state.data);
  



    return (
      <div className='col-md-12'>
        <div className="col-md-6">
          <label className="col-md-4 col-form-label" htmlFor="jobtitle" >
            Department

          </label>

    <div className="modal-container" style={{ height: 100 }}>
        <span
          onClick={() => this.setState({ show: true })}
          
        >
         <i className="fas fa-edit" title= "Add/Edit Designation"></i>

        </span>
        <div className="col-md-6">
    
            <select id="department" className="form-control"  >
              <option value="NON SELECTED">NON SELECTED</option>
              { this.props.state.dropdown && this.props.state.dropdown.departments && this.props.state.dropdown.departments.map( (item,index) => {
                // console.log("item",item)
                return <option key={index} value={item.deptName}>{ item.deptName }</option>
              } ) }

            </select>
            
          </div>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
            Departments
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <BootstrapTable data={this.props.state.dropdown.departments} striped={true} hover={true} className="custom-table"
          columns={ columns }
          cellEdit={ cellEditFactory({ mode: 'dbclick' }) }
          
          
         
          >

          <TableHeaderColumn width="133" colSpan="1" rowSpan='1'  className="editable" dataField='deptName' isKey={true}  dataFormat={ this.inputSelect }>Description</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='fullName'   >Code</TableHeaderColumn>
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='DeptID' dataFormat={ this.checkBox } >Active</TableHeaderColumn>
           
            <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataFormat={ this.trashIcon }></TableHeaderColumn>
            
            
        </BootstrapTable>
        
          </Modal.Body>
          <Modal.Footer>
          <Button className="btn btn-info"  >Save</Button>
            <Button onClick={this.handleHide}>Close</Button>
            
          </Modal.Footer>
        </Modal>
      </div>
          {/* <span className="icon"> <i className="fas fa-edit" title= "Add/Edit Designation"></i></span> */}
          {/* <div className="col-md-6">

      

            <select id="department" className="form-control"  >
              <option value="NON SELECTED">NON SELECTED</option>
              { this.props.state.dropdown && this.props.state.dropdown.departments && this.props.state.dropdown.departments.map( (item,index) => {
                console.log("item",item)
                return <option key={index} value={item.deptName}>{ item.deptName }</option>
              } ) }

            </select>
            
          </div> */}


        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    // departments: state.updateDropwon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDepartments: () => { dispatch( fetchDepartments() ) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);


