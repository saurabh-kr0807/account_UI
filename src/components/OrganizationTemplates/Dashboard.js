import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Table } from 'reactstrap'
import Sidebar from '../templates/Sidebar'
import UserHeader from '../UserTemplate.js/UserHeader'


import ShowEnterprises from './ShowEnterprises'
import Layout from '../templates/Layout'
const Dashboard = () => {


    const location = useLocation();

    const [orgData, setOrgData] = useState([]);
    const [orgId, setOrgId] = useState(location.state.id);  
    const [flag,setFlag]=useState(false)
    const fetchOrg = async () => {
       // if(location.state.id!=12){
        try {
            const response = await axios.get(`https://account-management-system-hero.herokuapp.com/get-organization/${orgId}`);
            if (response) {
               // console.log(Object.keys(response.data));
              //  console.log(Object.values(response.data));
                if (response.data) {
                    setOrgData(response.data);
                  setFlag(true)//this is required because when the dashboard page
                  //reloads we again need fetchOrg to run,so given flag dependency in useEffect
                    console.log(response.data);
                } else {
                    console.log('No Schedule Job Locations returned');
                }
            }
        } catch (err) {
            console.log(err);
        }
        
    //setOrgId(location.state.id)
    };
    useEffect(()=>{
        fetchOrg();
    },[orgId,flag])
 

    return (
        <>
  
        <Layout>
        <div>
        <UserHeader organizationName={orgData.organizationName} organizationAddress={orgData.organizationAddress}/>
          {flag? <ShowEnterprises orgData={orgData}/>:''}
        </div>
        </Layout>
      </>
        
    )
}

export default Dashboard