import Image from "next/image";
import {useMoralis} from "react-moralis";


function Avatar({username, logoutOnPress}) {
    const {user, logout} = useMoralis();
    return (

        
        <div>
            <Image
            src={`https://avatars.dicebar.com/api/pixel-art/${username || user.get("username")}`}
            layout="fill"
            onClick={() => logoutOnPress && logout()}
            
            />
        </div>
    )
}

export default Avatar
