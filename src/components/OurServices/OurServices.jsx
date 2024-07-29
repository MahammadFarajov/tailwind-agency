import { FaArrowRightLong } from "react-icons/fa6"
import { FiMonitor } from "react-icons/fi"
import { LuPenTool } from "react-icons/lu"
import { PiTelevisionSimple } from "react-icons/pi"
import { SlSettings } from "react-icons/sl"

const OurServices = () => {
  return (
    <div>
        <div className="flex items-center gap-[155px] max-w-[1248px] mx-auto w-full mt-[150px]">
            <div className="flex flex-col gap-[33px]">
                <div className="text-[24px] font- text-[#377DFF]">Our Services</div>
                <div className="flex flex-col gap-[18px]">
                    <p className="text-[55px] font-bold leading-[75.02px]">Perfect and Fast Movement</p>
                    <p className="text-[#464646] font-normal text-[20px] leading-[32px]">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
                </div>
                <h5 className="font-bold justify-end text-[20px] leading-[34px] text-[#377DFF] flex items-center gap-[16px]">Read more <FaArrowRightLong /></h5>
            </div>
            <div className="flex flex-col gap-[38px]">
                <div className="flex gap-[41px] ">
                    <div className="py-[35px] px-[53px] border border-black w-[262px] border-opacity-[10%] rounded-[30px]">
                    <div className="flex flex-col items-center gap-[32px]">
                        <div className="bg-[#377DFF] rounded-[100%] flex justify-center w-[100px] h-[100px] items-center text-center  "><FiMonitor  color="white" size={42}/></div>
                        <p className="font-bold text-[24px] leading-[34px] items-center">Social Media
                        Management</p>
                    </div>
                    </div>
                    <div className="py-[35px] px-[53px] border border-black w-[262px] border-opacity-[10%] rounded-[30px]">
                    <div className="flex flex-col items-center gap-[32px]">
                        <div className="bg-[#FF2D2D] rounded-[100%] flex justify-center w-[100px] h-[100px] items-center text-center  "><SlSettings   color="white" size={42}/></div>
                        <p className="font-bold text-[24px] leading-[34px] text-center flex items-center">Search Engine
                        Opimization</p>
                    </div>
                    </div>
                </div>
                <div className="flex gap-[41px] ">
                    <div className="py-[35px] px-[53px] border border-black w-[262px] border-opacity-[10%] rounded-[30px]">
                    <div className="flex flex-col items-center gap-[32px]">
                        <div className="bg-[#7CE761] rounded-[100%] flex justify-center w-[100px] h-[100px] items-center text-center  "><LuPenTool  color="white" size={42}/></div>
                        <p className="font-bold text-[24px] leading-[34px] items-center">Design
                        </p>
                    </div>
                    </div>
                    <div className="py-[35px] px-[53px] border border-black w-[262px] border-opacity-[10%] rounded-[30px]">
                    <div className="flex flex-col items-center gap-[32px]">
                        <div className="bg-[#FFA800] rounded-[100%] flex justify-center w-[100px] h-[100px] items-center text-center  "><PiTelevisionSimple  color="white" size={42}/></div>
                        <p className="font-bold text-[24px] leading-[34px] items-center">Ads</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices