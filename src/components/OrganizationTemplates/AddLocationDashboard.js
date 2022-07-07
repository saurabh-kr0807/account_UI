
import { useState,useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom'
import EnterpriseHeader from '../Headers/EnterpriseHeader'
import axios from 'axios'
import { Table } from 'reactstrap'
import MoreLocations from './MoreLocations'
import { useNavigate } from 'react-router-dom';
import Layout from '../templates/Layout'
const AddLocationDashboard=(props)=> {
    const location = useLocation();
    const navigate = useNavigate();
    let [entId,setEntId]=useState(location.state.id)
    const [entData,setEntData]=useState([])
    const [flag,setFlag]=useState(false);
    const [locationSaveFlag,setLocationSaveFlag]=useState(false);
    const [resLoc,setResLoc]=useState([])
    const [locationData,setLocationData]=useState([]);
    const fetchEntData= async () => {
        
            try {
                const response = await axios.get(`https://account-management-system-hero.herokuapp.com/get-enterprise/${entId}`);
                if (response) {
                   console.log(Object.keys(response.data));
                   console.log(Object.values(response.data));
                    if (response.data) {
                        setEntData(response.data);
                        setFlag(true)
                        console.log(response.data);
                       // console.log(entData)
                      // console.log(entData.locations[0].locationCode)
                    } else {
                        console.log('No Schedule Job Locations returned');
                    }
                }
            } catch (err) {
                console.log(err);
            }
        
}
const saveLocationsList=async ()=>{
  await  axios.post(`https://account-management-system-hero.herokuapp.com/add-location/${entId}`,
  {locationData:locationData},
  {
    "Access-Control-Allow-Origin":"*"
})
  .then((res)=>{
      alert("locations saved successfully");
      setLocationSaveFlag(true);
      setResLoc(res.data);
      console.log(res.data)
    })
  .catch(error =>{
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
})
}

const handleLocData=(data)=>{
   setLocationData(arr => [...arr,data])
}
    useEffect(()=>{
        const x=location.state;
        setEntId(x.id) 
        console.log(x);
        fetchEntData();
    },[entId,flag])
const redirectWithLocId=(ids)=>{
        navigate("/add-centers",{state:{id:ids}})
}
    return (
        <>
        <Layout>
            <EnterpriseHeader enterpriseName={entData.enterpriseName} enterpriseAddress={entData.enterpriseAddress}/>
          <MoreLocations  handleLocData={handleLocData}/>
            
         <Table>
        <tr>
                {/* <th>
                    Location Code
                </th> */}
                <th>
                    Location Name
                </th>
                <th>
                    Location Address
                </th>
                <th>
                    Edit 
                </th>
                <th>
                    Delete 
                </th>
                </tr>
             {flag ?  <tr>
                    {/* <td>{entData.locations[0].locationCode}</td> */}
                    <td>{entData.locations[0].locationName}</td>
                    <td>{entData.locations[0].locationAddress}</td>
                    <td><p className="mt-3">
                <a className="btn btn-primary">
                Edit
                </a></p></td>
                <td><p className="mt-3">
                <a className="btn btn-primary">
                Delete
                </a></p></td>
                </tr>
                :''}
               {locationData && locationData.map((item)=>(
                   <>
                   <tr>
                    {/* <td></td> */}
                    <td>{item.locationName}</td>
                    <td>{item.locationAddress}</td>
                    <td><p className="mt-3">
                <a className="btn btn-primary">
                    Edit
                </a></p></td>
                <td><p className="mt-3">
                <a className="btn btn-primary">
                    Delete
                </a></p></td>
                </tr>
                   </>
               ))
               }
                 
                     <button className="btn btn-primary mt-3" onClick={saveLocationsList}>Final Save</button>
            </Table>
            {locationSaveFlag ?
            <Table>
                  <tr>
                <th>
                    Location Code
                </th>
                <th>
                    Location Name
                </th>
                <th>
                    Location Address
                </th>
                <th>
                    Add Expenses 
                </th>
               
                </tr>
                <tr>
                    <td>{entData.locations[0].locationCode}</td>
                    <td>{entData.locations[0].locationName}</td>
                    <td>{entData.locations[0].locationAddress}</td>
                    <td><p className="mt-3">
                <a className="btn btn-primary">
                Add Expenses
                </a></p></td>
               
                </tr>
                {resLoc && resLoc.map((item)=>(
                    <>
                     <tr>
                    <td>{item.locationCode}</td>
                    <td>{item.locationName}</td>
                    <td>{item.locationAddress}</td>
                    <td><p className="mt-3">
                <a className="btn btn-primary" onClick={()=>{redirectWithLocId(item.locationId)}}>
                    Add Expenses
                </a></p></td>
               
                </tr>

                    </>
                ))}
            </Table>:
            ''}
            </Layout>
        </>
    );

}
export default AddLocationDashboard