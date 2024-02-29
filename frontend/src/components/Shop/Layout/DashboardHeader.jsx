import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import foodi from "../../../Assests/image/Foodikha_event.png";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/dashboard">
          <img
            src={`${foodi}`}
            alt="Profile "
            className="w-[80px] h-[60px] ml-5"
          />
        </Link>
      </div>
      <div className="flex items-center mr-5">
        <div className="flex items-center mr-4">
          <Link to="/dashboard-coupouns" className="800px:block hidden">
            <AiOutlineGift
              color="[#3F1B11]"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
              color="[#3F1B11]"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <FiShoppingBag
              color="[#3F1B11]"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <FiPackage color="#555" size={30} className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <BiMessageSquareDetail
              color="[#3F1B11]"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to={`/shop/:id`}>
            <img
              src="https://cdn.pixabay.com/photo/2023/06/03/14/48/woman-8037822_1280.png"
              alt="Shop_Avatar"
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
