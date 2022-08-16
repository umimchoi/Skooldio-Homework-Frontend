import React from "react";
import Heart from "./icon/Heart";
import clsx from "clsx";

function Card(prop) {
  const { faculty, likes, logo, name: major, roundSeats, score } = prop.prop;
  const { name: facultyName, university } = faculty;
  const { name: universityName } = university;
  console.log(prop);
  return (
    <React.Fragment>
      <div className="p-3 shadow-sm shadow-warm-gray w-96 rounded-md">
        <div className="flex flex-col mb-4">
          <div className="flex">
            <img src={logo} className="max-h-24 h-auto w-auto" alt="logo" />
            <div className="flex items-left">
              <div className="text-left flex flex-col mb-5">
                <span className="text-grapefruit text-xl text-bold mb-2">
                  {facultyName}
                </span>
                <span className="text-warm-gray text-md text-bold mb-5">
                  {major}
                </span>
                <span className="text-warm-gray text-md text-bold">
                  {universityName}
                </span>
              </div>
            </div>
            <Heart />
          </div>
          <div className="w-11/12 h-0.5 bg-light-gray m-auto"></div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex mb-6">
            <span className="text-warm-gray-2 mr-4">รอบที่เปิด</span>
            {roundSeats?.map((data, index) => {
              return (
                <div
                  className={clsx(
                    "rounded-full w-6 h-6 text-white mx-1 cursor-pointer",
                    {
                      "bg-greenish-teal text-white": data > 0,
                      "bg-light-gray text-white": data < 0,
                    }
                  )}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-grapefruit text-bold mr-28">
                รอบที่ 4: Admission
              </span>
              <div className="border border-grapefruit py-1 px-3 rounded-2xl">
                <span className="text-grapefruit text-bold text-sm">
                  แก้ไขคะแนน
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col text-right">
                <span className="text-warm-gray-3">คะแนนของคุณคือ</span>
                <span className="text-warm-gray-3 text-2xl">
                  {score ? score.id : "0"}
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col mx-1">
                <span className="text-warm-gray-3 text-2xl">
                  {score ? score.min : "0"}
                </span>
                <span className="text-warm-gray-3">คะแนนต่ำสุด 60</span>
              </div>
              <div className="flex flex-col mx-1">
                <span className="text-warm-gray-3 text-2xl">
                  {score ? score.avg : "0"}
                </span>
                <span className="text-warm-gray-3">คะแนนเฉลี่ย 60</span>
              </div>
              <div className="flex flex-col mx-1">
                <span className="text-warm-gray-3 text-2xl">
                  {score ? score.max : "0"}
                </span>
                <span className="text-warm-gray-3">คะแนนสูงสุด 60</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 h-0.5 bg-light-gray m-auto"></div>
        <div className="flex my-4 mx-4">
          <span className="text-ocean-blue text-sm text-left">
            ดูสัดส่วนคะแนน
          </span>
        </div>
        <div className="w-11/12 h-0.5 bg-light-gray m-auto"></div>
        <div className="flex my-4 mx-4">
          <span className="text-warm-gray text-xs text-left">
            {likes} คนที่สนใจ
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
