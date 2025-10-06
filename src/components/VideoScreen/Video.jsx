/* eslint-disable react/prop-types */

const Video = ({src, title}) => {
  return (
    <div className="mt-16 py-5 sm:px-5 px-2">
        <video src={src} controls autoPlay className=" rounded-lg mb-6 w-full"></video>
        <h3 className="sm:text-[20px] text-lg">{title}</h3>
    </div>
  )
}

export default Video