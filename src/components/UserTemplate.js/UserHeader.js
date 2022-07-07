import React from 'react'

const UserHeader = ({organizationName,organizationAddress}) => {
    return (
        <>
            <div className="col-md-12 d-none d-md-block position-fixed" id="shrinkHeader">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div>
                            <p className="text-light ">Organisation Name : {organizationName}</p>
                        </div>
                        <div>
                            <p className="text-light mr-3">Organisation Address: {organizationAddress}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default UserHeader