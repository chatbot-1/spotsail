import React from "react";

const UserProfile = () => {
  return (
    <div className="mt-[130px]">
      <div className="flex shadow-[inset_0px_20px_20px_10px_#00000024] bg-black h-[70vh]">
        <div>
          <div className="border-r-[2px] w-[200px] p-6 h-full">
            <div className=" flex flex-col gap-9">
              <h1 className="mb-[10px]">Heyy user name</h1>
              <h1 className="p-2 cursor-pointer rounded shadow-[inset_0px_0px_131px_0px_#2d3748]">
                Dashboard
              </h1>
              <h1 className="p-2 cursor-pointer rounded shadow-[inset_0px_0px_131px_0px_#2d3748]">
                User Profile
              </h1>
              <h1 className="p-2 cursor-pointer rounded shadow-[inset_0px_0px_131px_0px_#2d3748]">
                Logout
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full p-6">
          <h1 className="text-center">Your Spotsail status</h1>
          <div className="flex shadow-[inset_0px_0px_131px_0px_#2d3748] justify-between items-center mt-[50px] rounded p-4">
            <div>
              <p className="p-2 bg-gray-800 h-[40px] w-[40px] flex items-center justify-center rounded-full">
                1
              </p>
            </div>
            <div className="leading-5">
              <p className="text-[18px]">Restaurant Name</p>
              <span className="text-[12px]">restaurant</span>
            </div>
            <div>
              <p className="text-[18px] text-green-500">Confirmed</p>
              <p className="text-[12px]"> Date</p>
            </div>
            <div>
              <p className="text-[18px]">Paid</p>
              <p className="text-[12px]">Amount</p>
            </div>
          </div>
          <div className="flex shadow-[inset_0px_0px_131px_0px_#2d3748] justify-between items-center mt-[50px] rounded p-4">
            <div>
              <p className="p-2 bg-gray-800 h-[40px] w-[40px] flex items-center justify-center rounded-full">
                1
              </p>
            </div>
            <div className="leading-5">
              <p className="text-[18px]">Restaurant Name</p>
              <span className="text-[12px]">restaurant</span>
            </div>
            <div>
              <p className="text-[18px] text-green-500">Confirmed</p>
              <p className="text-[12px]"> Date</p>
            </div>
            <div>
              <p className="text-[18px]">Paid</p>
              <p className="text-[12px]">Amount</p>
            </div>
          </div>

          <div className="flex shadow-[inset_0px_0px_131px_0px_#2d3748] justify-between items-center mt-[50px] rounded p-4">
            <div>
              <p className="p-2 bg-gray-800 h-[40px] w-[40px] flex items-center justify-center rounded-full">
                1
              </p>
            </div>
            <div className="leading-5">
              <p className="text-[18px]">Restaurant Name</p>
              <span className="text-[12px]">restaurant</span>
            </div>
            <div>
              <p className="text-[18px] text-green-500">Confirmed</p>
              <p className="text-[12px]"> Date</p>
            </div>
            <div>
              <p className="text-[18px]">Paid</p>
              <p className="text-[12px]">Amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
