import { IconFacebook, IconInstagram, IconLinkedin } from "../../assets/icons/icons"
import logo from "..//..//assets/images/logoimg.png"

const Footer = () => {
  return (
    <>
    <div className="bg-black text-white flex flex-wrap items-start justify-start sm:px-20 px-10 sm:gap-20 gap-10 py-10">
        <div><img src={logo} alt="logo" className="sm:w-[120px] w-[100px]" /></div>
        <div className="basis-[250px]">
            <h1 className="uppercase text-[19px] mb-4">Our Community</h1>
            <h2 className="mb-5 hover:text-[#0077B5] transition-all"><a href="/" className="flex items-center gap-2"><div className="text-[25px]"><IconLinkedin/></div>LinkedIn</a></h2>
            <h2 className="mb-5 "><a href="/" className="flex items-center gap-2"><div className="text-[25px]"><IconInstagram/></div>Instagram</a></h2>
            <h2 className=" hover:text-[#3b5998] transition-all"><a href="/" className="flex items-center gap-2"><div className="text-[25px]"><IconFacebook/></div>Facebook</a></h2>
        </div>
    </div>
    <hr />
    <div className="px-5 py-4 text-center text-[15px] text-white bg-black"><p>CopyRight © 2023. All Rights Reserved</p></div>
    </>
  )
}

export default Footer