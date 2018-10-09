import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './Salarycomponent.css';
// fetchSalaryComponent
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { connect } from 'react-redux';
import { fetchSalaryComponent } from '../../actions/Salarycomponent';


class Salarycomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compList: []
        };
        this.submitData = this.submitData.bind(this);
    }


    componentDidMount() {

        this.props.fetchSalaryComponent();

    }

    onChange = (cell, row, formatExtraData, rowIdx, e) => {



        return (
            <Fragment>
                {/* <input type="number" id="input" onChange={ (e) => { this.changeInputDataTable(row, e.target.value) } } /> */}
                <input type="number" id="input" onBlur={(e) => { this.changeInputDataTable(row, e.target.value) }} />
            </Fragment>
        );
    }


    changeInputDataTable(row, value) {

        console.log("row.salaryComponentId:value", row.salaryComponentId, value);
        if (value !== "") {
            const compObj = {
                "compId": row.salaryComponentId,
                "amount": value
            };
            console.log("compObj", compObj);

            var prevData = this.state.compList;
            prevData.push(compObj);
            this.setState({ compList: prevData });
        }


    };


    submitData(e) {
        e.preventDefault();
        const rowData = this.state.compList;
        // console.log("rowdata", rowData);
    };



    selectRowProp(data) {
        //console.log("selectRowProp::data", data);

    }

    render() {




        console.log("earnin656456456gData", this.props.SalaryComponent.SalaryComponent);
        const listData = this.props.SalaryComponent.SalaryComponent;
        const filters = listData.filter((filterss) => listData)
        const earningData = listData.filter(a => a.componentType === 'E');
        const deductData = listData.filter(a => a.componentType === 'D');
        // console.log("earningData", earningData);
        // console.log("deductData", deductData);

        return (
            <form  >
                <div className=' row col-md-12'>
                    <h3 className="header1" style={{ textAlign: "center" }}>Monthly Salary Component Configuration</h3>
                    <div className='col-md-6 alert alert-info'>

                        <h4 className="header1" style={{ textAlign: "center" }}>Earnings</h4>

                        <div className="row">
                            <BootstrapTable
                                data={earningData}
                                selectRow={this.selectRowProp}
                            // keyField='salaryComponentId'
                            >

                                <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='salaryComponentId' isKey={true}  >Salary ComponentId</TableHeaderColumn>
                                <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='componentName'   >Component Name</TableHeaderColumn>
                                <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataFormat={this.onChange}  >
                                    Component Type</TableHeaderColumn>
                            </BootstrapTable>


                        </div>

                    </div>

                    <div className='col-md-6 alert alert-danger'>

                        <h4 className="header1" style={{ textAlign: "center" }}>Deduction</h4>

                        <div className="row">
                            <BootstrapTable
                                data={deductData}


                            >

                                <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='salaryComponentId' isKey={true}  >Salary ComponentId</TableHeaderColumn>
                                <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataField='componentName'  >Component Name</TableHeaderColumn>
                                <TableHeaderColumn width="133" colSpan="1" rowSpan='1' dataFormat={this.onChange}  >Component Type</TableHeaderColumn>
                            </BootstrapTable>


                        </div>


                    </div>
                </div>
                <button type="btn" onClick={this.submitData}>Submit</button>
            </form>

        );
    }
}




const mapStateToProps = (state) => {
    return {
        state: state,
        SalaryComponent: state.salaryComponentFetch
        // designation: state.designationDataFetch.designation,
        // employee: state.fetchEmployeelist


    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSalaryComponent: (data) => { dispatch(fetchSalaryComponent(data)) },


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Salarycomponent);
