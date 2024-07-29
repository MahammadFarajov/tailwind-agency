import teamwork from "../../image/teamwork.png"
import presenter from "../../image/presenter.png"

const Started = () => {
  return (
    <div className="max-w-[1248px] flex items-center gap-[162px] mb-[178px] mx-auto w-full relative">
        <div className="flex flex-col gap-[25px] w-[451px]">
            <p className="text-[55px] font-bold leading-[75.02px] ">Interesting Collaboration With Us?</p>
            <p className="text-[#464646] font-normal text-[20px] leading-[32px]">Help you to reach your business goal</p>
            <button className="w-[fit-content] gap-[10px] py-[12px] px-[50px] border bg-[#377DFF] border-[#377DFF] rounded-3xl text-white hover:border hover:bg-white hover:border-[#377DFF] hover:rounded-3xl hover:text-[#377DFF] transition-all shadow-md">Get Started</button>
        </div>
        <div className="flex absolute top-[15%] right-[21%]">
            <img src={teamwork} className="relative z-10" alt="" />
            <img src={presenter} className="absolute bottom-[60%] right-[-80%]" alt="" />
        </div>
    </div>
  )
}

export default Started