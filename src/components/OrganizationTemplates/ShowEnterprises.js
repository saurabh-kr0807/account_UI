import React,{useRef,useState} from 'react'
import { Table } from 'reactstrap'
import AddEnterprise from './AddEnterprise'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const baseURL = "https://account-management-system-hero.herokuapp.com/add-location"
const ShowEnterprises = ({ orgData }) => {
    console.log(orgData);
    //to prevent renders on every letter input by user
 const loc_name_ref=useRef(null)
 const loc_addr_ref=useRef(null)
 const navigate = useNavigate();
 let entPayload={};
 const [location, setLocation] = useState({
     location_name: "",
     location_addr: "",
 })
 const [entState,setEntState]=useState(null);
 const addOneLocation=()=>{
   
    setLocation({
        ...location, 
        location_name : loc_name_ref.current.value,
        location_addr: loc_addr_ref.current.value                           
      }) ;
      //console.log(Object.values(location))
 }
 const seeLocationDashboard=async (e) =>{
    e.preventDefault();
    await axios.post(baseURL,{
        enterpriseId: orgData.enterprises[entState].enterpriseId,
        locationName : location.location_name,
        locationAddress : location.location_addr
    },{
        "Access-Control-Allow-Origin":"*"
    }
    )
    .then(response=>{
        entPayload =  response.data;
        console.log(response.data)
         console.log(response.data.enterpriseId);//for debuggibg purpose
    })
    .catch(error =>{
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
    })
    navigate("/add-location-dashboard", {state : {payload : entPayload, entName : orgData.enterprises[entState].enterpriseName,entAddress:orgData.enterprises[entState].enterpriseAddress}});
    window.location.reload(true)
 }
 console.log("rendering")
 const passKey=(k)=>{
     console.log(k)
    setEntState(k)
    navigate("/add-location-dashboard",{state:{id: k}})
  
 }
    return (
        <>
            <AddEnterprise organizationData={orgData} />
            <Table
                borderless
                hover
                responsive
            >
            <thead>
                    <tr>
                        <th>
                            Enterprise Code
                        </th>
                        <th>
                            Enterprise Name
                        </th>
                        <th>
                            Enterprise Address
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
            </thead>
                <tbody>
                  
                        {
                            Object.keys(orgData.enterprises).map((key, i) => (
                                <tr key={i}>
                                    <td>{orgData.enterprises[key].enterpriseCode}</td>
                                    <td>{orgData.enterprises[key].enterpriseName}</td>
                                    <td>{orgData.enterprises[key].enterpriseAddress}</td>
                                    <td>  <p className="mt-3">
                <a className="btn btn-primary" onClick={()=>{passKey(orgData.enterprises[key].enterpriseId)}} data-bs-toggle="collapse" href="#addLocation" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add Location
                </a>
            </p></td>
                                </tr>
                            ))
                        }
                   
                       
                     
                </tbody>
            </Table>
          
            <div className="collapse" id="addLocation">
                <div className="card card-body">
                    {/* <form  onSubmit={()=>{alert(Object.values(location))}}> */}
                    <form  onSubmit={seeLocationDashboard}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="locationName"> Location Name  </label></td>
                                    <td>
                                        <input type="text"
                                            name="locationName"
                                            placeholder="location name"
                                            ref={loc_name_ref}
                                        />
                                    </td>
                                </tr>
                                <tr className="m-3">
                                    <td><label htmlFor="locationAddress">Location Address </label></td>
                                    <td>
                                        <input type="text"
                                            name="locationAddress"
                                            placeholder="location address"
                                            ref={loc_addr_ref}
                                        />
                                    </td>
                                </tr>
                                
                           
                                <tr>
                                    <td>
                                        <button className="btn btn-primary mt-3"
                                            type="submit"
                                            onClick={addOneLocation}
                                        >
                                            Save
                                        </button>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>

       
                        
   
            </>
    )

}

export default ShowEnterprises