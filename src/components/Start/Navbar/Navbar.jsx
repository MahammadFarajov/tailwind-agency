import logo from "../../../image/Group.png" // max-w-[1248px] mx-auto w-full / container

const Navbar = () => {
  return (
    <nav className="max-w-[1248px] mx-auto w-full flex items-center justify-between py-[72px]">
        <div className="flex items-center gap-[11px]">
            <img className="w-[54px] h-[50px]" src={logo} alt="logo" />
            <div className="flex flex-col gap-[4px]">
                <h2 className="font-bold text-xl">Agency</h2>
                <h4 className="text-base">Creative</h4>
            </div>
        </div>
        <ul className="flex gap-[50px]">
            <li><a className="font-bold text-lg" href="/Home">Home</a></li>
            <li><a className="text-lg" href="/About">About</a></li>
            <li><a className="text-lg" href="/Services">Services</a></li>
            <li><a className="text-lg" href="/Projects">Projects</a></li>
        </ul>
        <button className="py-[12px] px-[50px] border bg-white border-[#377DFF] rounded-3xl text-[#377DFF] hover:border hover:bg-[#377DFF] hover:border-[#377DFF] hover:rounded-3xl hover:text-white transition-all">Contact us</button>
    </nav>
  )
}

export default Navbar