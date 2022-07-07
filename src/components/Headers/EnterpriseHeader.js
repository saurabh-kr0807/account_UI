import React from 'react'

const EnterpriseHeader = ({enterpriseName,enterpriseAddress}) => {
    //const {enterpriseName,enterpriseAddress}=entState;
    console.log(enterpriseName)
    return (
        <>
            <div className="col-md-12 d-none d-md-block position-fixed" id="shrinkHeader">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div>
                            <p className="text-light ">Enterprise Name : {enterpriseName}</p>
                        </div>
                        <div>
                            <p className="text-light mr-3">Enterprise Address: {enterpriseAddress}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default EnterpriseHeader