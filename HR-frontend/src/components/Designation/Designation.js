import React from "react";
import { fetchDesignation, fetchDesignationDataSuccess } from '../../actions/Designation';
import { connect } from 'react-redux';

class Designation extends React.Component {
  constructor(props) {
    super(props);

  }
componentDidMount(){
  //console.log("componentDidMount::this.props",this.props);
  this.props.fetchDesignationDataSuccess()
  // setTimeout( () => {
  //     this.props.fetchDepartments();
  //   console.log("fk");
  // }, 3000 )
}

render() {
  
  // console.log('updateDropwon',fetchDepartments);
   console.log("this.props.data",this.props.data);
    //console.log("this.props", this.props);
    //console.log("this.props.state.drodpwon.departments", this.props.state.dropdown.departments);
    return (
        <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="jobtitle">
        Designation:
        </label>
        <div className="col-md-4"
        id="Designation"
        type="text"
        name="Designation"
         
        // value={this.state.DesgtID}
        //  defaultValue={ employee.DesgtID }
         >
           <select id="department" className="form-control" >
            <option value="NON SELECTED">NON SELECTED</option>
           

          </select>
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
    fetchDesignationDataSuccess: () => { dispatch( fetchDesignationDataSuccess() ) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Designation);