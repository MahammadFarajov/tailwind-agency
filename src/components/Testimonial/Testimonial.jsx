import ellipse from "../../image/Ellipse 57.png"


const Testimonial = () => {
  return (
    <div className="max-w-[1248px] mx-auto w-full flex flex-col gap-[50px] mb-[404px]">
        <div className="top">
            <div className="text-[24px] font- text-[#377DFF] text-center">Testimonial</div>
            <p className="text-[55px] font-bold leading-[75.02px] text-center">What do we do</p>
        </div>
        <div className="flex items-center justify-between gap-[50px]">
            <div className="bg-white px-[35px] py-[50px] flex flex-col  shadow-lg rounded-[16px]">
                <div className="flex items-center gap-[30px]">
                    <img src={ellipse} alt="" />
                    <div className="">
                        <h3 className="font-semibold text-[#377DFF] leading-[34px] text-[20px]">Bill Adams</h3>
                        <h5 className="font-normal text-[#464646]  text-[11px] opacity-[50%]">CEO UpTech</h5>
                    </div>
                </div>
                <p className="font-normal text-[#464646] text-[18px] leading-[28px]">
                “ This team is really the best in its field,I don't regret working with them, and will come back again thanks “
                </p>
            </div>
            <div className="bg-white px-[35px] py-[50px] flex flex-col  shadow-lg rounded-[16px]">
                <div className="flex items-center gap-[30px]">
                    <img src={ellipse} alt="" />
                    <div className="">
                        <h3 className="font-semibold text-[#377DFF] leading-[34px] text-[20px]">Bill Adams</h3>
                        <h5 className="font-normal text-[#464646]  text-[11px] opacity-[50%]">CEO UpTech</h5>
                    </div>
                </div>
                <p className="font-normal text-[#464646] text-[18px] leading-[28px]">
                “ This team is really the best in its field,I don't regret working with them, and will come back again thanks “
                </p>
            </div>
            <div className="bg-white px-[35px] py-[50px] flex flex-col  shadow-lg rounded-[16px]">
                <div className="flex items-center gap-[30px]">
                    <img src={ellipse} alt="" />
                    <div className="">
                        <h3 className="font-semibold text-[#377DFF] leading-[34px] text-[20px]">Bill Adams</h3>
                        <h5 className="font-normal text-[#464646]  text-[11px] opacity-[50%]">CEO UpTech</h5>
                    </div>
                </div>
                <p className="font-normal text-[#464646] text-[18px] leading-[28px]">
                “ This team is really the best in its field,I don't regret working with them, and will come back again thanks “
                </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial