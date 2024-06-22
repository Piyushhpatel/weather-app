import React from "react"
import location from "../assets/location.png"

const GrantAccess = (props) => {
  let getLocation = props.getLocation;

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div>
        <img src={location} className="w-[80px] aspect-square mt-[50px]"/>
      </div>
      <div>
        <h3 className="font-mulish uppercase text-white font-bold text-2xl text-center mt-5 leading-[3rem]">Grant Location Access</h3>
        <p className="font-mulish font-semibold text-md text-white">Allow access to get weather information</p>
      </div>
      <button 
        onClick={getLocation}
        className="flex justify-center items-start font-semibold font-mulish text-white bg-blue-500 m-10 py-[10px] px-[30px] rounded-md hover:bg-blue-600 transition-all duration-300"
      >
        Grant Access
      </button>
    </div>
  )
};

export default GrantAccess;
