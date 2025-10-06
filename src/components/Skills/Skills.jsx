import { useState } from "react"
import skillsimg from "..//..//assets/images/skillsimg.png"

const Skills = () => {
    const[isOpen, setIsOpen] = useState(false)

    function handleOpen(){
        setIsOpen(prev => !prev)
    }

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 md:px-16 sm:px-10 px-5 py-10">
        <div>
            <img src={skillsimg} alt="Skills Image" />
        </div>
        <div className="lg:pt-10">
            <h1 className="font-semibold sm:text-[40px] text-[30px] mb-3">Gain <span className="text-primary">In-Demand </span> Skills</h1>
            <p className="text-[19px] mb-5">Our courses are designed to teach you the skills that employers are seeking in today&lsquo;s job market. You can acquire the skills you need to advance your career and increase your earning potential.</p>
            <div className="flex justify-between border px-4 py-2 rounded-md text-[20px] cursor-pointer bg-slate-100"onClick={handleOpen}>Perks <span>&gt;</span></div>
            {isOpen ? <div className="pl-10 mt-5">
                <ul className="list-disc flex flex-col gap-4">
                    <li>Earn money on referral</li>
                    <li>Earn money on referral</li>
                    <li>Earn money on referral</li>
                    <li>Earn money on referral</li>
                </ul>
            </div>
            : null}
        </div>
    </div>
  )
}

export default Skills
