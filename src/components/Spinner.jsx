import React from "react"
import loading from "../assets/loading.gif"

const Spinner = (props) => {
  return (
    <div>
      <img src={loading} height={150} width={150} className="mt-[50px]"/>
      <h3 className="text-center text-white font-mulish font-semibold text-lg">Loading...</h3>
    </div>
  )
};

export default Spinner;
