import { LuPlayCircle } from "react-icons/lu"
import group2 from "../../image/Rectangle 832.png"

const About = () => {
  return (
    <div className="flex flex-col gap-[38px] max-w-[1248px] mx-auto w-full items-center">
      <div className="flex flex-col gap-[20px]">
        <div className="text-[24px] font- text-[#377DFF] text-center">About Us</div>
        <p className="text-[55px] font-bold leading-[75.02px] text-center">Our Teammate</p>
      </div>
      <div className="flex items-center gap-[65px]">
        <img src={group2} alt="group2" />
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <p className="text-[#464646] font-normal text-[20px] leading-[32px]">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
            <p className="text-[#464646] font-normal text-[20px] leading-[32px]">We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business</p>
          </div>
          <div className="flex items-center gap-[25px]">
              <button className="py-[12px] px-[50px] border bg-white border-[#377DFF] rounded-3xl text-[#377DFF] hover:border hover:bg-[#377DFF] hover:border-[#377DFF] hover:rounded-3xl hover:text-white transition-all">About Us</button>
              <button className=" flex items-center gap-[10px] py-[12px] px-[50px] border bg-[#377DFF] border-[#377DFF] rounded-3xl text-white hover:border hover:bg-white hover:border-[#377DFF] hover:rounded-3xl hover:text-[#377DFF] transition-all"><LuPlayCircle size={24} /> Our Story</button>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default About