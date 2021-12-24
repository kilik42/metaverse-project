import { useMoralis } from "react-moralis";

function SendMessage() {
    const {user, Moralis} = useMoralis();
    return (
        <form>
            <input className="outline-none bg-transparent text-white border-4  placeholder-gray-500"  type="text"
            placeholder={`Enter a essage ${user.getUsername()}...`}
            />
            <button
            className="font-bold text-pink-500"
            >
                Send 
            </button>
            
        </form>
    )
}

export default SendMessage
