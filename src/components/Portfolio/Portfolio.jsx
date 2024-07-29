import write from "../../image/write.png"
import phones from "../../image/Group 2153.png"
import phone from "../../image/Group 2154.png"

const Portfolio = () => {
  return (
    <div>
        <div className="max-w-[1248px] mx-auto w-full flex flex-col items-center gap-[34px] mb-[196px]">
            <div className="flex flex-col gap-[20px]">
                <div className="text-[24px] font- text-[#377DFF] text-center">Our Portfolio</div>
                <p className="text-[55px] font-bold leading-[75.02px] text-center">What do we do</p>
                <p className="text-[#464646] text-center font-normal text-[20px] leading-[32px]">all projects that we have already done , proven can help to use more comfortable, then can used by client from our business</p>
            </div>
            <div className="flex gap-[69px] items-center justify-center pt-[48px]">
                <img src={phones} alt="" />
                <img src={write} alt=""  />
                <img src={phone} alt=""  />
            </div>
            <button className="py-[12px] px-[50px] border bg-white border-[#377DFF] rounded-3xl text-[#377DFF] hover:border hover:bg-[#377DFF] hover:border-[#377DFF] hover:rounded-3xl hover:text-white text-center transition-all">See All Portfolio</button>
        </div>
    </div>
  )
}

export default Portfolio
