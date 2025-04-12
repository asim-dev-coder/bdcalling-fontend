import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // const navigate = useNavigate();

    return (
        <div className="bg-white border-b border-gray-200 font-poppins ">
            {/* <div className="flex-1">
              <img className="w-44" src="public/logo.png" alt="" />
            </div> */}
            {/* <div className="hidden md:flex gap-4">
                <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    Home
                </NavLink>
                <NavLink to="/courses" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    Courses
                </NavLink>
                <NavLink to="/events" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    Events
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    About
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "btn btn-sm btn-primary" : "btn btn-sm btn-ghost"}>
                    Contact
                </NavLink>
            </div> */}

            {/* Example of programmatic navigation */}
            {/* <div className="ml-4 hidden md:block">
                <button onClick={() => navigate("/courses")} className="btn btn-outline btn-sm">
                    Explore Courses
                </button>
            </div> */}


            <div>
                <div className="w-9/12 mx-auto py-4 text-[16px] flex justify-between items-center gap-22 ">
                    <div className=" flex gap-8 ">
                        <div className="border-r border-gray-400 flex gap-8 pr-12 text-2xl font-semibold bg-gradient-to-r from-[#023e8a] to-[#48cae4] text-transparent bg-clip-text">
                            Assim
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="hidden md:flex gap-8  font-poppins">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/skills", label: "Skills" },
                                    { to: "/myprojects", label: "My Projects" },
                                    { to: "/client", label: "Client" },
                                    { to: "/pricing", label: "Pricing" },
                                    { to: "/contactme", label: "Contact Me" },
                                ].map(({ to, label }) => (
                                    <NavLink
                                        key={to}
                                        to={to}
                                        className={({ isActive }) =>
                                            `relative pb-1 transition-all duration-300 
                                           hover:text-[#00b4d8] text-[16px]
                                          ${isActive ? "text-[#0077b6] after:scale-x-100" : "text-black after:scale-x-0"} 
                                           after:content-[''] after:absolute after:left-0 after:bottom-0 
                                            after:w-full after:h-[2px] after:bg-[#0077b6] after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link to="/pricing">
                        <button className="btn text-white font-semibold flex gap-2 text-lg items-center bg-gradient-to-t from-[#023e8a] to-[#48cae4] hover:bg-gradient-to-b hover:from-[#023e8a] hover:to-[#48cae4] px-4 py-2 shadow-lg rounded-lg ">HIRE ME
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
