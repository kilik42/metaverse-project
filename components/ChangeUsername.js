import { useState } from "react";
import { useMoralis } from "react-moralis";

function ChangeUsername() {
    // const {user, Moralis} = useMoralis();
    const {setUserData, isUserUpdating, userError, user } = useMoralis();

    const setUsername = () => {
        const userName = prompt(`enter your new user name (current: ${user.getUsername()})`);

        if(!userName) return;
        
        setUserData({
            username, 
        });
    }
    return (
        <div className="text-sm absolute top-5 right-5">
            <button disabled ={isUserUpdating} onClick={setUsername} className="hover: text-pink-700">
                change your user name
            </button>


        </div>
    )
}

export default ChangeUsername
