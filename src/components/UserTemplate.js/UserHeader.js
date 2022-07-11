import React, {useState, useEffect} from 'react'
import axios from 'axios';

const UserHeader = ({orgId}) => {
    
    const [orgData, setOrgData] = useState([]);
    const [flag, setFlag] = useState(false)

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

    useEffect(() => {
        fetchOrg();
    }, [orgId, flag])

    return (
        <>
            <div className="col-md-12 d-md-block position-fixed" id="shrinkHeader">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <div>
                            <p className="text-light ">Organisation Name : {orgData.organizationName}</p>
                        </div>
                        <div>
                            <p className="text-light mr-3">Organisation Address: {orgData.organizationAddress}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default UserHeader