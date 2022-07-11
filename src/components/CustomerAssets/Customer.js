import React, { useState } from 'react'
import Layout from '../templates/Layout';
import Sidebar from '../templates/Sidebar';
import UserHeader from '../UserTemplate.js/UserHeader'
import AddCustomer from './AddCustomer'

const Customer = () => {
    const [orgId, setOrgId] = useState(1);
    console.log(orgId);
    return (
        <>
            <Layout>
                <UserHeader orgId={orgId} />
                <div className="position-relative">
                    <AddCustomer orgId={orgId} />
                </div>
            </Layout>
        </>
    )
}

export default Customer


// first time user login -> 
//         -> add org(button) -> adding org 
//                                -> dashboard
//                                -> custore
//                             Already user -> login -> dashboard
//                                                         -> header (org name  && org address)
//                                                         -> side bar( customer , all stuffs)
//                                                         -> body ( button-> add enterprises
//                                                                     list of enterprises)


// debouncig 
// useForm 