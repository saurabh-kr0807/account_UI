import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const baseURl = "https://account-management-system-hero.herokuapp.com/add-enterprise-location"
const AddEnterprise = ({organizationData}) => {
   const {organizationId}=organizationData
    const navigate = useNavigate();
    const [enterpriseData, setEnterpriseData] = useState({
        enterpriseName:"",
        enterpriseAddress:"",
        locationName:"",
        locationAddress:"",
        organizationId:"",
    })

    const AddEnterprises = (e) =>{
        const newEntData = {...enterpriseData}
        newEntData[e.target.name] = e.target.value
        setEnterpriseData(newEntData);
        console.log(Object.keys(newEntData));
        console.log(Object.values(newEntData))
    }
    
    enterpriseData.organizationId = organizationId

    const registerEnt = async (e) => {
        e.preventDefault();
        await axios.post(baseURl, {
            enterpriseName : enterpriseData.enterpriseName,
            enterpriseAddress : enterpriseData.enterpriseAddress,
            locationName : enterpriseData.locationName,
            locationAddress : enterpriseData.locationAddress,
            organizationId : enterpriseData.organizationId 
        },{
            "Access-Control-Allow-Origin":"*"
        })
        .then( (res) =>{
            console.log(res.data.locations);
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
        navigate('/dash-board', {state : {id : enterpriseData.organizationId,name : "raka"}})
        window.location.reload(true);
    }

    const reloadDashboard = () => {
        console.log("kachra");
        navigate('/dash-board', {state : {id : enterpriseData.organizationId, name : "erft"}})
    }

    return (
        <>
            <p className="mt-3">
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#addEnterpreise" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add new Enterprise
                </a>
            </p>
            <div className="collapse" id="addEnterpreise">
                <div className="card card-body">
                    <form method="post" action="/dash-board" id="entForm" onSubmit={registerEnt}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="enterpriseName"> Enterprise Name  </label></td>
                                    <td>
                                        <input type="text"
                                            name="enterpriseName"
                                            placeholder="Enter Here"
                                            onChange={AddEnterprises}
                                        />
                                    </td>
                                </tr>
                                <tr className="m-3">
                                    <td><label htmlFor="enterpriseAddress">Enterprise Address </label></td>
                                    <td>
                                        <input type="text"
                                            name="enterpriseAddress"
                                            placeholder="Enter Here"
                                            onChange={AddEnterprises}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="locationName"> Location Name  </label></td>
                                    <td>
                                        <input type="text"
                                            name="locationName"
                                            placeholder="Enter Here"
                                            onChange={AddEnterprises}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="locationAddress"> Location Address  </label></td>
                                    <td>
                                        <input type="text"
                                            name="locationAddress"
                                            placeholder="Enter Here"
                                            onChange={AddEnterprises}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className="btn btn-primary mt-3"
                                            type="submit"
                                            onClick={reloadDashboard}
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

export default AddEnterprise