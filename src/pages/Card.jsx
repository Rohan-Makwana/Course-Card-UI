import CardRating from "../components/CardRating";
import { useEffect, useState } from "react";
import { BsChevronRight, BsHeart } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import courses from "../../Courses.js";

function Card() {
  // eslint-disable-next-line
  const [data, setData] = useState('');
 
  useEffect(() => {
    setData(courses)
  }, [])
  


  if (data != 0 && data.length > 0) {
    return (
      <div className="h-auto md:h-screen w-screen py-8 px-12 lg:py-24 lg:px-40">
        {data.map((course) => {
          return (
            <div key={course.id} className="flex w-full h-full flex-col">
              {/* Top half */}
              <div className="flex flex-col justify-start items-start w-full h-1/5 md:h-20  lg:h-1/4">
                <strong className="text-xl lg:text-4xl w-full h-auto">
                  {course.course_name}
                </strong>

                {course.multi_day === "true" && (
                  <p className="text-gray-500 text-md lg:text-lg font-semibold inline-block">
                    Multi-Day Course &nbsp;
                    <svg
                      className="inline-block mb-1"
                      width="20px"
                      fill="#71717a"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z" />
                    </svg>
                  </p>
                )}
              </div>

              {/* Bottom  half */}
              <div className="flex flex-col-reverse lg:flex-row w-full h-3/4">
                {/* left side info*/}
                <div className="flex w-full lg:w-1/2 h-full flex-col justify-evenly">
                  {/* course summary */}
                  <p className="text-md lg:text-lg font-medium ml-1">
                    {course.course_intro}
                  </p>

                  {/* instructor */}
                  <div className="flex flex-row justify-start items-center h-16">
                    <div className="avatar w-12 ml-1">
                      <div className="w-8 rounded-full">
                        <img src={course.instructor_img[0]} />
                      </div>
                    </div>
                    <p className="text-primary text-md lg:text-lg font-medium">
                      {course.instructor_name}
                    </p>
                  </div>

                  {/* star ratings */}
                  <div className="flex flex-col md:flex-row justify-start w-full items-center h-auto ml-1">
                    <CardRating rating={course.instructor_star} />
                    <p className="text-sm font-regular text-gray-500 mb-1 ml-2">
                      {course.instructor_reviews} total reviews for this teacher
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row justify-start w-full items-center h-auto ml-1">
                    <CardRating rating={course.class_star} />
                    <p className="text-sm font-regular text-gray-500 mb-1 ml-2">
                      {course.class_reviews} reviews for this class
                    </p>
                  </div>

                  {/* users completed */}
                  <p className="text-md lg:text-lg font-medium h-10 ml-1">
                    Completed by {course.completed} learners
                  </p>

                  {/* button */}
                  <div className="flex flex-col-reverse md:flex-row justify-between md:justify-start justify-self-end  w-full  items-start  md:items-center  h-20 ml-1">
                    <button className="btn btn-primary w-full md:w-1/3 rounded-full">
                      <p className="text-xs md:text-md w-full font-bold inline-block">
                        See Class Schedule{" "}
                        <BsChevronRight
                          width="20px"
                          fill="#ffffff"
                          className="inline-block font-bold mb-1"
                        />
                      </p>
                    </button>

                    <div className="flex flex-row w-full md:w-1/3 md:ml-4">
                      {/* save */}
                      <a className="w-1/2 text-md lg:text-lg text-gray-400 font-bold cursor-pointer inline-block flex justify-center align-center">
                        <BsHeart className="inline-block mt-2 mr-1" /> Save
                      </a>

                      {/* Share */}
                      <a className="w-1/2  text-md lg:text-lg text-primary font-bold cursor-pointer inline-block flex justify-center align-center">
                        <FaShare className="inline-block mt-2 mr-1" /> Share
                      </a>
                    </div>
                  </div>
                </div>

                {/*right side image */}
                <div className=" w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center align-center">
                  <img
                    className=" object-cover w-4/5 max-h-[25rem]"
                    src={course.course_img[0]}
                    alt="Course Intro"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <>
        <h1>No data availbale</h1>
      </>
    );
  }
}

export default Card;
