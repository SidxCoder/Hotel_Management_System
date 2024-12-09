import React, {useState} from 'react'
import SellerSignup from "../Model/SellerSignup"
import SellerSignin from '../Model/SellerSignin'
const SellerAuth = () => {

    const [authType,setAuthType]= useState("signup")
  return (
    <div>
        <div>
            {
                authType==="signup"?
                <SellerSignup authType={setAuthType}/>
                :
                <SellerSignin authType={setAuthType}/>
            }
        </div>
    </div>
  )
}

export default SellerAuth
