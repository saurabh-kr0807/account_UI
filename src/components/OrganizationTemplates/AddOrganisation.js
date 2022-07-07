import React, { useState,useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const baseURL = "https://account-management-system-hero.herokuapp.com/add-organization"
const AddOrganisation = (props) => {
    
    const navigate = useNavigate();
    const [organizationData, setOrganizationData] = useState({
        organization_name: "",
        organization_address: "",
    })
    // let orgid = null; fixed stmt
    //let orgid = 220; //for debugging purpose
    let orgid=12;
    //to prevent renders on every letter input by user
    const name_ref=useRef(null)
    const addr_ref=useRef(null)
    const notify = () => {toast.success("Organization added successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    setOrganizationData({
        ...organizationData, 
        organization_name : name_ref.current.value,
        organization_address: addr_ref.current.value                           
    })  
}
const registerOrg = async (e) =>{
    e.preventDefault();
    await axios.post(baseURL,{
        organizationName : organizationData.organization_name,
        organizationAddress : organizationData.organization_address
    },{
        "Access-Control-Allow-Origin":"*"
    }
    )
    .then(response=>{
        orgid =  response.data.organizationId;
      //   console.log(response.data.organizationId);//for debuggibg purpose
    })
    .catch(error =>{
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
    })
    navigate("/dash-board", {state : {id : orgid, name : "rakesh"}});
}
console.log(orgid); 
    return (
        <>
            <div className="container mt-3">
                <div className="mb-3">
                    <h2 className="text-center">Register Organization</h2>
                </div>
                <form method="post" action="/dash-board" id="orgForm" onSubmit={registerOrg}>
                    <div className="form-group">
                        <label htmlFor="organization_name">Organization Name </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="organization_name" 
                            placeholder="Enter here"
                            ref={name_ref}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organization_address">Organization Address</label>
                        <textarea 
                            className="form-control" 
                            name="organization_address" 
                            rows="3"
                            ref={addr_ref}
                            required
                            />
                    </div>                    
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onClick={notify}
                        >
                            Register
                        </button>
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default AddOrganisation


