import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoHomeOutline, IoAppsOutline, IoGridOutline, IoNewspaperOutline } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const Sidebar = () => {
    const navLinks = [
        {
            title: "Home", 
            icon:(<IoHomeOutline color="#555" width={"22px"} height="22px"/>),
            active:false,
        },
        {
            title: "Boards", 
            icon:(<IoAppsOutline color="#555" width={"22px"} height="22px"/>),
            active:false,
        },
        {
            title: "Projects", 
            icon:(<IoGridOutline color="#555" width={"22px"} height="22px"/>),
            active:false,
        },
        {
            title: "Analytics", 
            icon:(<FaChartBar color="#555" width={"22px"} height="22px"/>),
            active:false,
        },
        {
            title: "Workflows", 
            icon:(<FaChartBar color="#555" width={"22px"} height="22px"/>),
            active:false,
        },
        {
            title: "Notifications", 
            icon:(<IoMdNotificationsOutline color="#555" width={"22px"} height="22px"/>),
            active:false,
        },
        {
            title: "Newsletter", 
            icon:(<IoNewspaperOutline color="#555" width={"22px"} height="22px"/>),
            active:false,
        }
    ]

  return (
    <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
        <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-white">
           <span className="text-orange-400 font-semibold text-2xl md:block hidden">Logo.</span>
           <span className="text-orange-400 font-semibold text-2xl md:hidden block">L.</span>
        </div>
        <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-white py-5 px-3 relative">
            {navLinks.map((link)=>{
                return(<div key={link.title} className={`flex items-center gap-2 w-full rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer ${link.active ? "bg-orange-300" : "bg-transparent"}`}>
                    {link.icon}
                    <span className="font-medium text-[15px] md:block hidden">{link.title}</span>
                </div>)
            })}
            <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-orange-300 px-2 py-3 cursor-pointer bg-gray-200">
             <RiLogoutBoxRLine />
             <span className="font-medium text-[15px] md:block hidden">Log Out</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar