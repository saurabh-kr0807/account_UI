import React from 'react'
import UserHeader from '../UserTemplate.js/UserHeader'
import AddCustomer from './AddCustomer'

const Customer = () => {
    return (
        <>
            <UserHeader />
            <div>
                <AddCustomer />
            </div>
        </>
    )
}

export default Customer