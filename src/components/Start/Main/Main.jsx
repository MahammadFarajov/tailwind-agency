import { FaStar } from "react-icons/fa"
import group from "../../../image/Rectangle 844.png"
import ellipse from "../../../image/Ellipse 50.png"

const Main = () => {
  return (
    <div className="max-w-[1248px] mx-auto w-full flex flex-col items-center mb-[150px]">
        <div className="w-[890px] flex flex-col items-center justify-between gap-[24px]">
            <p className="font-[800] text-[64px] text-center leading-[87.3px]">Make your dream 
            business goal come true</p>
            <p className="font-[400] text-[20px] leading-[30px] text-center text-[#464646] p-[8px]">when you need us for improve your business,
            then come with us to help your business have reach it, you just sit and feel that goal</p>
            <button className="py-[12px] px-[50px] border bg-[#377DFF] border-[#377DFF] rounded-3xl text-white hover:border hover:bg-white hover:border-[#377DFF] hover:rounded-3xl hover:text-[#377DFF] transition-all" >Start Project</button>
        </div>
        <div className="w-[985.25px] flex justify-center items-center relative mt-[63px]">
            <img src={group} alt="" />
            <div className="flex items-center justify-center flex-col gap-7px rounded-[16px] py-[16px] px-[20px] bg-white overflow-auto absolute left-[3%] top-[10%] shadow-xl">
                <div className="top flex gap-1 items-center ">
                    <FaStar color="#F8BD38"/>
                    <h5 className="font-bold text-[#1D1D1D] text-[12px] opacity-[50%] leading-[15px]">Great Project</h5>
                </div>
                <div className="flex items-center">
                <h3 className="font-bold text-[24px] leading-[32.74px]">800+</h3>
                <h4 className="font-semibold text-[24px] leading-[32.74px]">Done</h4>
                </div>
            </div>
            <div className="bg-white px-[20px] py-[25px] flex flex-col gap-[12px] w-[166px] shadow-xl rounded-[16px] absolute right-0 bottom-[-1%]">
                <div className="flex items-center gap-[10px]">
                    <img src={ellipse} alt="" />
                    <div className="">
                        <h3 className="font-semibold text-[10px]">Bill Adams</h3>
                        <h5 className="font-semibold text-[6px] opacity-[50%]">CEO UpTech</h5>
                    </div>
                </div>
                <p className="font-normal text-[10px] leading-[13.64px]">
                “ This team is really the best in its field,I don't regret working with them, and will come back again thanks “
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main