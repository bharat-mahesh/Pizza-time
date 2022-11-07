import React from "react";

const Logout=()=>{
    return(
        <div>
            <h1>You have logged out</h1>
            <a href="https://pizzatime.auth.ap-south-1.amazoncognito.com/login?client_id=5uvqs52l2pbt52m48uemdigknk&response_type=code&scope=aws.cognito.signin.user.admin+email+openid&redirect_uri=http://localhost:3000/">Log back in</a>
        </div>

    )
}

export default Logout