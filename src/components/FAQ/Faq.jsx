/* eslint-disable react/prop-types */

function Questions({question, answer, id}){
    return(
      <div className="relative">
              <input type="checkbox" id={id} className="hidden peer" />
              <label className="block sm:px-5 px-2 py-5 cursor-pointer sm:text-[20px] text-[18px] w-[90%] font-medium " htmlFor={id}>{question}
                <svg className="w-5 h-5 absolute top-7 rotate-45 transition-all right-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> 
              </label>
              <hr/>
              <div className="overlay px-5 max-h-0 overflow-hidden transition-all peer-checked:max-h-[600px] ">
                <p className="py-4">{answer}</p>
                <hr/>
              </div>
            </div>
    )
}
  
const Faq = () => {
  return (
    <div className="py-20 sm:px-10 px-5">
        <h1 className="text-center sm:text-[40px] text-[30px] font-semibold mb-12"><span className="text-primary">Frequently</span> Asked Questions</h1>
        <div className="lg:w-[900px] w-full mx-auto">
            <hr />
            <Questions
            id="1"
            question="What is Skyskillhub?"
            answer="Skyskillhub is an online learning platform that offers a wide range of courses and resources to help individuals enhance their skills and knowledge in various domains."
            />
            <Questions
            id="2"
            question="What is Skyskillhub?"
            answer="Skyskillhub is an online learning platform that offers a wide range of courses and resources to help individuals enhance their skills and knowledge in various domains."
            />
            <Questions
            id="3"
            question="What is Skyskillhub?"
            answer="Skyskillhub is an online learning platform that offers a wide range of courses and resources to help individuals enhance their skills and knowledge in various domains."
            />
            <Questions
            id="4"
            question="What is Skyskillhub?"
            answer="Skyskillhub is an online learning platform that offers a wide range of courses and resources to help individuals enhance their skills and knowledge in various domains."
            />  
            <Questions
            id="5"
            question="What is Skyskillhub?"
            answer="Skyskillhub is an online learning platform that offers a wide range of courses and resources to help individuals enhance their skills and knowledge in various domains."
            />
            <Questions
            id="6"
            question="What is Skyskillhub?"
            answer="Skyskillhub is an online learning platform that offers a wide range of courses and resources to help individuals enhance their skills and knowledge in various domains."
            />
          </div>
    </div>
  )
}

export default Faq
