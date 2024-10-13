import React from "react";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3 p-4">
          <h2 className="text-2xl font-semibold">News Details</h2>
          <p>{id}</p>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
