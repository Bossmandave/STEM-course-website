/* eslint-disable react/prop-types */
import internship from "..//..//assets/images/internship.png"


function BenefitList({icon ,title, description}){
    return(
        <div className="shadow-xl rounded-md px-10 py-10">
            <div className="mb-5"><img src={icon} width={50} alt="icon Image" /></div>
            <h2 className="text-[22px] mb-2 font-medium">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

const Benefits = () => {
  return (
    <div className="md:py-24 py-20 lg:px-20 md:px-16 sm:px-10 px-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-16">
        <div>
          <h1 className="sm:text-[40px] text-[30px] font-semibold"><span className="text-primary">Benefits</span> You Get When Learning With <span className="text-primary">Us?</span></h1>
        </div>
        <div>
          <p className="text-[19px]">
            Whether you&apos;re looking to build your resume, advance your career, or
            simply learn something new, we have the courses you need. Our
            courses cover a wide range of fields, including technology,
            business, and creative arts.
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <BenefitList
        icon={internship}
        title="Paid internship"
        description="we offers the opportunity for a paid internship for our best tech students at the end of the program."
        />
         <BenefitList
         icon={internship}
        title="Paid internship"
        description="we offers the opportunity for a paid internship for our best tech students at the end of the program."
        />
         <BenefitList
         icon={internship}
        title="Paid internship"
        description="we offers the opportunity for a paid internship for our best tech students at the end of the program."
        />
         <BenefitList
         icon={internship}
        title="Paid internship"
        description="we offers the opportunity for a paid internship for our best tech students at the end of the program."
        />
      </div>
    </div>
  );
};

export default Benefits;
