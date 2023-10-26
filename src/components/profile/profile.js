import React, { useContext } from "react";
import { UserContext } from "../../stores/userStore";

function Profile(){

    const {login, setlogin} = useContext(UserContext)
    return(
        <div>
            {login ? 'dados do usuario' : 'Faça seu login para ter acesso as informaçoes'}
        </div>
    )
}

export default Profile;