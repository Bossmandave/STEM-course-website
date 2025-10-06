/* eslint-disable react/prop-types */

const CourseCard = ({title, time, onClick, weekNumber,video}) => {

  return (
    <button onClick={onClick}
    style={{
      cursor: weekNumber >= video.week ? 'pointer' : 'not-allowed',
      opacity: weekNumber >= video.week ? 1 : 0.5
    }}
    disabled={weekNumber < video.week}
     className= "block w-full text-left rounded-lg bg-black text-white px-3 py-5 mb-2 hover:bg-gray-800 cursor-pointer transition-all">
        <h2 className="text-[18px] font-medium mb-2">{title}</h2>
        <p className="">{time}</p>       
    </button>
  )
}

export default CourseCard