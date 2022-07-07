//import libraries
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import axios from 'axios';
//import components
import About from './components/globalViews/About';
import Home from './components/globalViews/Home';
import Register from './components/globalViews/Register';
import Login from './components/globalViews/Login';
import AddOrganisation from './components/OrganizationTemplates/AddOrganisation';
import Dashboard from './components/OrganizationTemplates/Dashboard';
import PageNotFound from './PageNotFound'
import AddCenters from './components/OrganizationTemplates/AddCenters'
import AddLocationDashboard from './components/OrganizationTemplates/AddLocationDashboard'

const App = () => {

  return (
    <Router>
      <div className="App">
   
        <Routes>
          <Route exact path="/" element={<Home /> }/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/register" element={<Register />}/> 
          <Route exact path="/login" element={<Login />}/> 
          <Route exact path="/add-organization" element={<AddOrganisation />} />
          <Route exact path="/dash-board" element={<Dashboard meta={12} />} />
          <Route exact path="/add-location-dashboard" element={<AddLocationDashboard />} />
          <Route exact path="/add-centers" element={<AddCenters/>} />
          <Route path="*" element={<PageNotFound/>}/>
          
        </Routes>
  
      </div>

    </Router>
  )
}


export default App;
