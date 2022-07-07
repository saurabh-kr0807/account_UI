import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Table } from 'reactstrap'
import UserHeader from '../UserTemplate.js/UserHeader'


import ShowEnterprises from './ShowEnterprises'

const Dashboard = ({meta}) => {


    const location = useLocation();

    const [orgData, setOrgData] = useState([]);
    const [orgId, setOrgId] = useState(meta);  
    const [flag,setFlag]=useState(false)
    // if(location.state === null) {
    //     setOrgId(meta);
    // }
    const fetchOrg = async () => {
        try {
            const response = await axios.get(`https://account-management-system-hero.herokuapp.com/get-organization/${orgId}`);
            if (response) {
               // console.log(Object.keys(response.data));
              //  console.log(Object.values(response.data));
                if (response.data) {
                    setOrgData(response.data);
                    setFlag(true)
                    console.log(response.data);
                } else {
                    console.log('No Schedule Job Locations returned');
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(()=>{
        const x=location.state;
        setOrgId(x.id) 
        console.log(x);
        fetchOrg();
    },[orgId,flag])

    return (
        <>
            <UserHeader organizationName={orgData.organizationName} organizationAddress={orgData.organizationAddress} />
            <Table borderless hover responsive size="sm" className='mt-5'>
                <thead>
                    <tr>
                        <th className="col-md-2" >
                            
                        </th>
                    </tr>
                    {flag? <th className="col-md-10 mt-3">
                            <ShowEnterprises orgData={orgData} />
                        </th>:''}
                </thead>
            </Table>
        </>
    )
}

export default Dashboard