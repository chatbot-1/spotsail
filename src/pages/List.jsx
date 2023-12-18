import React from "react";
import study from "../assets/study.gif"

const List = () => {
  return (
    <div className="container mt-[150px]">
      <div>
        <div className="flex justify-center gap-5 items-center">
          <img src={study} alt="" className="h-[80px]"/>
          <h1 className="text-[40px] font-bold">List your industry</h1>
        </div>
        <div className="flex shadow-[inset_0px_20px_20px_10px_#00000024] w-[600px] m-auto p-10 flex-col justify-center items-center mt-[50px]">
          <span>
            Note: Make sure you enter the correct data for verification
          </span>
          <div className="flex flex-col justify-around mt-[40px] gap-11">
            <div className="flex justify-between gap-5">
              <p>Name: </p>
              <input
                type="text"
                className="bg-transparent w-[300px] outline-none border-solid border-[1px] border-gray-400 px-[10px] py-[5px] rounded"
              />
            </div>
            <div className="flex justify-between gap-5">
              <p>Email: </p>
              <input
                type="email"
                className="bg-transparent w-[300px] outline-none border-solid border-[1px] border-gray-400 px-[10px] py-[5px] rounded"
              />
            </div>
            <div className="flex justify-between gap-5">
              <p>Contact No: </p>
              <input
                type="number"
                className="bg-transparent w-[300px] outline-none border-solid border-[1px] border-gray-400 px-[10px] py-[5px] rounded"
              />
            </div>
            <div className="flex justify-between gap-5">
              <p>Address: </p>
              <textarea
                name=""
                id=""
                rows="4"
                className="bg-transparent w-[300px] outline-none border-solid border-[1px] border-gray-400 px-[10px] py-[5px] rounded"
              ></textarea>
            </div>
            <div className="flex justify-between gap-5">
              <p>Upload Cover: </p>
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                className="bg-transparent w-[300px] outline-none border-solid border-[1px] border-gray-400 px-[10px] py-[5px] rounded"
              />
            </div>
          </div>
          <button className="mt-[40px] mb-[10px] p-1 bg-gray-900/30 px-[30px] py-[10px] rounded font-bold shadow-[inset_0px_20px_20px_10px_#00000024] flex gap-2 items-center justify-center">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default List;
