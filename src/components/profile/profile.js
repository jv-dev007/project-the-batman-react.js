import React, { useContext } from "react"
import { UserContext } from "../../stores/userStore"





function Profile() {
    const {login} = useContext(UserContext)
    return (
        <div>
            {login ? 'dados do usuario' : 'faça o login'}
        </div>
    )
}

export default Profile