import { GrHomeRounded } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import Logo from "./Logo";

const Header = () => {
    return (
        <nav className="flex items-center justify-between bg-black px-5 py-3 relative min-h-[10vh]  navbar">
            {/* Logo */}
            <div className="icon" >
                <Logo size="30px" color="white" />
            </div>
            {/* Search bar group */}
            <div className="flex items-center gap-2 flex-1 ml-5 max-w-96">
                {/* Home icon  */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center p-1 bg-gray-500 bg-opacity-40">
                    <GrHomeRounded className="icon" />
                </div>
                {/* Search input container */}
                <div className=" flex items-center gap-2 bg-gray-500 bg-opacity-40 px-3 py-2 rounded-3xl flex-1 transition-all cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-slate-50">
                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="border-0 outline-none bg-transparent text-white flex-1 pl-2"
                    />
                    {/* Search icon */}
                    <IoSearch className="icon" />
                </div>
            </div>
            {/* User control section */}
            <div className="flex items-center gap-2">
                <button className="text-white bg-transparent border-0 rounded-3xl font-bold py-2 px-5">Sign up</button>
                <button className="text-black bg-white border-0 rounded-3xl font-bold py-2 px-5">Login</button>
                <div className="w-10 h-10 rounded-full flex items-center justify-center uppercase font-bold text-white cursor-pointer bg-black border-4 border-green-600">a</div>
            </div>
        </nav>
    );
}

export default Header;