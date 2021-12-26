import { useMoralis } from "react-moralis";

function SendMessage() {
    const {user, Moralis} = useMoralis();
    const [message, setMessage] = useState("");

    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-blue-400">
            <input className="flex-grow outline-none bg-transparent text-white border-4  placeholder-gray-500 pr-5"  type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
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
