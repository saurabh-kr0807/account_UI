import React from 'react';
import EnterpriseHeader from '../Headers/EnterpriseHeader'
import { Table } from 'reactstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function AddLocationDashboard(props) {
    const location = useLocation();
    const [entData, setEntData] = useState({})
    //  const [entId, setEntId] = useState(null); 
    const [entState, setEntState] = useState({
        enterpriseName: "",
        enterpriseAddress: ""
    });
    useEffect(() => {
        const x = location.state;
        setEntData(x.payload);
        setEntState({
            enterpriseName: location.state.entName,
            enterpriseAddress: location.state.entAddress
        })
        console.log(entState)
        console.log(x);
        // console.log('i fire once');
        fetchEnt()
    }, [entData])

    // const passKey=(k)=>{
    //     setEntState(k);
    //  }
    const fetchEnt = async () => {
        try {
            const response = await axios.get(`https://account-management-system-hero.herokuapp.com/get-location/${entData.enterpriseId}`,
                {
                    "Access-Control-Allow-Origin": "*"
                });
            if (response) {
                console.log(Object.keys(response.data));
                console.log(Object.values(response.data));
                if (response.data) {
                    console.log(response.data);
                } else {
                    console.log('No Schedule Job Locations returned');
                }
            }
        } catch (error) {
            if (error.response) {

                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        }
    };
    return (
        <>
            <EnterpriseHeader entState={entState} />
            <a style={{ marginTop: 100 }} className="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                Add Location
            </a>
            <Table borderless hover responsive size="sm" className='mt-5'>
                <thead>
                    <tr>
                        <th className="col-md-2" >
                            Location Code

                        </th>
                        <th className="col-md-2" >
                            Location Name

                        </th>
                        <th>  Location Address</th>
                        <th>  Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>

                        <td style={{ width: '200px' }}>{entData.locationCode}</td>
                        <td style={{ width: '200px' }}>{entData.locationName}</td>
                        <td style={{ width: '200px' }}>{entData.locationAddress}</td>
                        <td>  <p className="mt-3">
                            <a className="btn btn-primary" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Add Expenses
                            </a>
                        </p></td>



                    </tr>

                </tbody>
            </Table>


        </>
    );
}

export default AddLocationDashboard;