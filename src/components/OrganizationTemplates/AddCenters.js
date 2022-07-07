import React,{useState,useRef} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Layout from '../templates/Layout'
import { Table } from 'reactstrap'
const baseURl = "https://account-management-system-hero.herokuapp.com/add-expense-center"
const AddCenters = () => {
   
    const location = useLocation();
    const [centerNames, setCenterNames] = useState([]);
    const [flag,setFlag]=useState(false)
    const centerRef=useRef(null)
   
    
    // centerNames.locationId = locationId
const saveCenterNames=(e)=>{
    e.preventDefault();
}
    const finalSave = async (e) => {
        e.preventDefault();
        await axios.post(baseURl, {centerNames:centerNames,
        locationId:location.state.id},{
            "Access-Control-Allow-Origin":"*"
        })
        .then( (res) =>{
            alert("the center details saved")
            console.log(res.data);
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
       
    }

// const allowAddingMoreCenters=()=>{
// setFlag(true)
// }
const saveCenter=()=>{ 
    const centerName=centerRef.current.value;
    //setCenterNames(centerName)
    setCenterNames(prev =>[...prev,centerName]);
    console.log(centerNames)
}
    return (
        <>
        <Layout>
            
            <p className="mt-3">
                <a style={{marginTop:100}} className="btn btn-primary" data-bs-toggle="collapse" href="#addCenters" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add Expense Centers
                </a>
            </p>
            <div className="collapse" id="addCenters">
                <div className="card card-body">
                    <form method="post" id="expenseCenterForm" onSubmit={saveCenterNames}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="centerName"> Center Name  </label></td>
                                    <td>
                                        <input type="text"
                                            name="expenseCenterName"
                                            placeholder="Enter Here"
                                            ref={centerRef}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className="btn btn-primary mt-3"
                                            type="submit"
                                            onClick={saveCenter}
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
       
          <Table>
            <tr><th>Center Names</th></tr>
        {centerNames && centerNames.map((key,index)=>(
           <tr><td>{centerNames[index]}</td></tr>
        ))} 
        <tr><button className="btn btn-primary mt-3" onClick={finalSave}>Final Save</button></tr>
         </Table>

            
      
     
        {/* <button className="btn btn-primary mt-3">Add more centers</button>
        <button className="btn btn-primary mt-3">Final Save</button> */}
        
 
       
      
        </Layout>
        </>
    )
}

export default AddCenters