import { auth, db } from "..//..//common/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IconCircleUser } from "../../assets/icons/icons";
import CourseCard from "../CourseCard/CourseCard";
import Video from "../VideoScreen/Video";
import { videos } from "../VideoScreen/VideoDetails";
import PulseLoader from "react-spinners/PulseLoader";


const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [show, setShow] = useState(false); // state to show who is signed in
  const [weekNumber, setWeekNumber] = useState(0);

  
  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          const signupDate = docSnap.data().signupDate;
          const weekNum = getWeekNumberRelativeToSignup(signupDate);
          setWeekNumber(weekNum);
        } else {
          console.log("User is not logged In");
        }
      });
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    // Automatically set the first available video for the current week
    const videoForThisWeek = videos.find(video => video.week === weekNumber);
    if (videoForThisWeek) {
      setCurrentVideo(videoForThisWeek);
    }
  }, [weekNumber]);


  const getWeekNumberRelativeToSignup = (signupDate) => {
    const now = new Date("12 September 2024");
    // const signup = new Date(signupDate.seconds * 1000); // Convert Firestore timestamp to JS Date
    const signup = signupDate.toDate()
    const daysSinceSignup = Math.floor((now - signup) / (24 * 60 * 60 * 1000));
    return Math.floor(daysSinceSignup / 7);
  };

  const [currentVideo, setCurrentVideo] = useState(videos[0]); // State to keep track of the currently selected video
  
  return (
    <div>
      {userDetails ? (
        <>
          <div>
            <div className="bg-slate-100 sm:px-12 px-4 py-3 flex items-center justify-between">
              <div>
                <h1 className="sm:text-[20px] text-lg font-medium">
                  <span className="sm:text-[25px] text-xl font-bold">Welcome </span>
                  {userDetails.fullName}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                {show ? (
                  <div className="bg-primary text-white px-5 py-2 rounded-md">
                    <p>Signed in as {userDetails.email}</p>
                  </div>
                ) : null}
                <div
                  className="text-[40px] cursor-pointer flex items-center justify-center"
                  onClick={() => {
                    setShow((prev) => !prev);
                  }}
                >
                  <IconCircleUser />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 ">
              <div className="sm:px-5 px-2 py-10 bg-slate-100 border-t-2">
                <h1 className="text-[20px] font-semibold mb-5">
                  Course Content
                </h1>
                <div className="h-[550px] overflow-y-scroll">
                  {videos.map((video, index) => {
                    return (
                      <CourseCard
                        key={index}
                        title={video.title}
                        time={video.time}
                        onClick={() => setCurrentVideo(video)}
                        weekNumber={weekNumber}
                        video={video}
                      />
                    )
                    })}
                </div>
              </div>

              <div className="col-span-2 lg:col-start-2 row-start-1">
                <Video src={currentVideo.src} title={currentVideo.title} />
              </div>
            </div>
          </div>
        </>
      ) : (
          <div className="h-[90vh] flex items-center justify-center">
            <PulseLoader
            color= {"#78b7ef"}
            loading={true}
            size={35}
            />
          </div>  
      )}
    </div>
  );
};

export default Profile;
