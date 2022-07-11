import { wait } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useState } from 'react'

import baseURL from '../apiAssets/baseURL'

const AddCustomer = (props) => {

    const [custData, setCustData] = useState({
        customerName: "",
        customerAddress: "",
        pincode: "",
    })
    //for pincode fetching 
    const [pinData, setPinData] = useState([]);
    const [flag, setFlag] = useState(false);
    const [pinCode, setPinCode] = useState(800001);

    const fetchPinCode = async (pcode) => {
        try {
            const response = await axios.get(`${baseURL}/get-city-detail/${pcode}`);
            if (response) {
                if (response.data) {
                    setPinData(response.data);
                    setFlag(true);
                    console.log(response.data);
                } else {
                    console.log("No Pincode available");
                }
            }
        } catch (err) {
            console.log(err);
        }
    }

    //for ifsc fetching 
    const [ifscData, setIfscData] = useState();
    // const fetchIfsc = async (ifsc) => {
    //     try {
    //         const response = await axios.get(`${baseURL}/get-bank-detail/${ifsc}`);
    //         if(response) {
    //             set
    //         }
    //     }
    // }

    const registerCust = () => {

    }

    const AddCust = () => {

    }
    const onChangePin = (e) => {

        setPinCode(e.target.value);
        console.log(pinCode);

        fetchPinCode(pinCode)
    }

    return (
        <>
            <p className="mt-3 position-relative ">
                <a className="btn btn-primary " data-bs-toggle="collapse" href="#stage1" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Add new Customer
                </a>
            </p>
            <div className="collapse" id="stage1">
                <div className="card card-body">
                    <form method="" action="/customer" id="custForm" onSubmit={registerCust}>
                        <table>
                            <tbody>
                                <tr >
                                    <td><label htmlFor="customerName">Customer Name</label></td>
                                    <td>
                                        <input type="text" name="customerName" placeholder="Enter Here" onChange={AddCust} />
                                    </td>
                                </tr>
                                <tr className="mt-2">
                                    <td><label htmlFor="customerAddress">Customer Address</label></td>
                                    <td>
                                        <input type="text" name="customerAddress" placeholder="Enter Here" onChange={AddCust} />
                                    </td>
                                </tr>
                                <tr className="mt-3">
                                    <td><label htmlFor="pincode">Pin Code</label></td>
                                    <td>
                                        <input type="text" name="pincode" placeholder="Enter Here" onChange={onChangePin}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="cityName">City Name</label></td>
                                    <td>
                                        <input type="text" name="cityName" value={pinData.cityName} readOnly />
                                    </td>
                                    <td><label htmlFor="districtName">District Name</label></td>
                                    <td>
                                        <input type="text" name="districtName" value={pinData.districtName} readOnly />                                   
                                    </td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="stateName">State Name</label></td>
                                    <td>
                                        <input type="text" name="stateName" value={pinData.stateName} readOnly />
                                    </td>
                                    <td><label htmlFor="countryName">Country Name</label></td>
                                    <td>
                                        <input type="text" name="countryName" value={pinData.countryName} readOnly />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="position-relative">
                            <p className="btn btn-primary mt-3" data-bs-toggle="collapse" href="#stage2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Add Purchsing Details
                            </p>
                        </div>
                        <div className="collapse position-relative" id="stage2">
                            <div className="card card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="vatno">VAT Number</label></td>
                                            <td>
                                                <input type="text" name="vatno" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                            <td><label htmlFor="tanno">TAN Number</label></td>
                                            <td>
                                                <input type="text" name="tanno" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                            <td><label htmlFor="gstno">GST Number</label></td>
                                            <td>
                                                <input type="text" name="gstno" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="panNo">Bussiness PAN Number</label></td>
                                            <td>
                                                <input type="text" name="panNo" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                            <td><label htmlFor="uAadharNo">Udhyog Addhar Number</label></td>
                                            <td>
                                                <input type="text" name="uAadharNo" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="position-relative">
                            <p className="btn btn-primary mt-3" data-bs-toggle="collapse" href="#stage3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Add Account Details
                            </p>
                        </div>
                        <div className="collapse" id="stage3">
                            <div className="card card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><label htmlFor="accountName">Account Holder Name</label></td>
                                            <td>
                                                <input type="text" name="accountName" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                            <td><label htmlFor="accountType">Account Type</label></td>
                                            <td>
                                                <select name="accountType">
                                                    <option>Select</option>
                                                    <option>Saving Account</option>
                                                    <option>Current Account</option>
                                                </select>
                                            </td>
                                            <td><label htmlFor="ifsc">IFSC Code</label></td>
                                            <td>
                                                <input type="text" name="ifsc" placeholder="Enter here" onChange={AddCust} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label htmlFor="branchName">Branch Name</label></td>
                                            <td>
                                                <input type="text" name="branchName" value={pinData.countryName} readOnly />
                                            </td>
                                            <td><label htmlFor="branchLocation">Branch Location</label></td>
                                            <td>
                                                <input type="text" name="branchLocation" value={pinData.countryName} readOnly />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="btn btn-primary position-relative mt-3" data-bs-toggle="collapse" href="#stage4" role="button" aria-expanded="false">
                            Add Communication Details
                        </p>
                        <div className="collapse" id="stage4">
                            <div className="card card-body">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <select name="communicatonType">
                                                    <option>Select</option>
                                                    <option>Email</option>
                                                    <option>Mobile Number</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" name="CommunicationTypeData" placeholder="Enter Here" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="position-relative mt-3">

                            <button className="btn btn-primary" type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddCustomer

