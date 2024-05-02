import { IoPersonOutline, IoShareSocialOutline, IoSettingsOutline } from "react-icons/io5";
import { HiChevronDown } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <div className='md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff] '>
            <div className="flex item-center gap-3 cursor-pointer">
              <IoPersonOutline 
                 color="#fb923c"
                 width={"28px"}
                 height={"28px"}
              />
              <span className="text-orange-400 font-semibold md:text-sm text-sm whitespace-nowrap flex justify-center items-center gap-2">
                 Board Name
                 <HiChevronDown 
                     color="#fb923c"
                     width={"16px"}
                     height={"16px"}
                 />
              </span>
            </div>
            <div className="flex items-center gap-2 md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px]">
              <CiSearch color={"#999"}/>
              <input type="text" placeholder="Search" className="w-full bg-gray-100 outline-none text-[15px]"/> 
            </div>
            <div className="md:flex hidden items-center gap-4">
                <div className="grid place-items-center bg-gray-100 round-full p-2 cursor-pointre">
                  <IoShareSocialOutline color={"#444"}/>
                </div>
                <div className="grid place-items-center bg-gray-100 round-full p-2 cursor-pointre">
                  <IoSettingsOutline color={"#444"}/>
                </div>
                <div className="grid place-items-center bg-gray-100 round-full p-2 cursor-pointre">
                  <IoMdNotificationsOutline color={"#444"}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar