import Image from "next/image";

function Header() {
    const {user} = useMoralis();

    return (
        <div>

            <div className="">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image layout="fill" className="rounded-full object-cover" src="https://links.papareact.com/3pi"/>


                </div>

                <div>

                <div>
                    <Avatar 
                      logoutOnPress
                    />
                </div>
                    

                {/* welcome message */}

                {/* user name */}

                {/* change username component */}
                </div>
            </div>
        </div>
    )
}

export default Header
