import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';
import Department from "./components/Department/Department";
import Designation from "./components/Designation/Designation";
import Employee from "./components/Employee/Employee";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Salarycomponent from "./components/Salarycomponent/Salarycomponent";
import rootSaga from './sagas';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// const store = createStore(rootReducer)
const sagaMiddleware = createSagaMiddleware()

// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
));

// then run the saga
sagaMiddleware.run(rootSaga)



const Dashboard = (props) => {
  const department = true;
  const normalUser = false;


  if ( ! department ) {
    return (<Redirect
      to={{
        pathname: "/Department",
        state: { from: props.location }
      }}
    />);
  }


  return (
    <div className="col-md-6">
      <h1>Welcome to NS-HR</h1>
      <Link to="/Department">Department</Link>
      <div>
      {/* <Link to="/Designation">Designation</Link> */}
      </div>
      <div>
      <Link to="/Employee">Employee</Link>
      </div>
      <div>
      <Link to="/EmployeeList">Employee List</Link>
      </div>
      <div>
      <Link to="/Salarycomponent">Salarycomponent</Link>
      </div>
    </div>
  );
}



class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
        <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Route path="/Department" component={Department} />
          <Route path="/Designation" component={Designation} />
          <Route path="/Employee/:id" component={Employee} />
          <Route exact path="/Employee" component={Employee} />
          <Route path="/EmployeeList" component={EmployeeList} />
          <Route path="/Salarycomponent" component={Salarycomponent} />
        </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
