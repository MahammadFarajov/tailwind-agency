import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu"
import logo from "../../image/Group.png"
import { FiMail, FiTwitter } from "react-icons/fi"

const Footer = () => {
  return (
    <div className="bg-[#383638] pb-[33px]">
        <div className="max-w-[1248px] pb-[33px] pt-[50px] mx-auto w-full flex gap-[68px]">
            <div className="flex items-center gap-[11px] bg-white py-[19px] px-[25px] h-[100px] rounded-[20px] ">
                <img className=" h-[50px]" src={logo} alt="logo" />
                <div className="flex flex-col gap-[4px]">
                    <h2 className="font-bold text-xl">Agency</h2>
                    <h4 className="text-base">Creative</h4>
                </div>
            </div>
            <ul className="flex gap-[25px] flex-col">
                <li><a className="font-bold text-white text-[22px] leading-[27.5px]" href="#">Terms & policies</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">Terms of Service</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">Privacy Policy</a></li>
            </ul>
            <ul className="flex gap-[25px] flex-col">
                <li><a className="font-bold text-white text-[22px] leading-[27.5px]" href="#">Company</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">Home</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">About Us</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">Contact Us</a></li>
            </ul>
            <ul className="flex gap-[25px] flex-col">
                <li><a className="font-bold text-white text-[22px] leading-[27.5px]" href="#">Contact</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">(+62) 893912392190</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">agecnycr@gmail.com</a></li>
            </ul>
            <ul className="flex gap-[25px] flex-col">
                <li><a className="font-bold text-white text-[22px] leading-[27.5px]" href="#">Location</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">PT Osiris Real Estate Internasional</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">Jl. KH. Wahid Hasyim Kel No.10D</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">Jakarta, Indonesia</a></li>
                <li><a className="font-light text-white text-[18.73px] leading-[23.41px]" href="#">team@OsirisRealEstate.com</a></li>
            </ul>
        </div>
        <div className="flex flex-col justify-end h-full">
        <div className="max-w-[1248px] mx-auto w-[500px] flex flex-col gap-[16px] items-center">
            <div className="flex gap-[40px]">
            <div className="bg-white rounded-[100%] flex justify-center w-[40px] h-[40px] items-center text-center  "><LuFacebook  color="#383638" size={22}/></div>
            <div className="bg-white rounded-[100%] flex justify-center w-[40px] h-[40px] items-center text-center  "><LuInstagram  color="#383638" size={22}/></div>
            <div className="bg-white rounded-[100%] flex justify-center w-[40px] h-[40px] items-center text-center  "><LuLinkedin  color="#383638" size={22}/></div>
            <div className="bg-white rounded-[100%] flex justify-center w-[40px] h-[40px] items-center text-center  "><FiMail  color="#383638" size={22}/></div>
            <div className="bg-white rounded-[100%] flex justify-center w-[40px] h-[40px] items-center text-center  "><FiTwitter  color="#383638" size={22}/></div>
            </div>
            <div className="border-t border-white w-[500px]"></div>
            <p className="text-white">Copyright @ 2022 Agency Creative. All Right Reserved</p>
        </div>
        </div>
    </div>
  )
}

export default Footer