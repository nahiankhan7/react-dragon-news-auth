import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import News from "./News/News";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allNews = useLoaderData();

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        <div className="">
          <LeftSideNav />
        </div>

        <div className="md:col-span-2 py-4">
          <h2 className="text-2xl font-semibold">Dragon News Home</h2>
          {allNews.map((news) => (
            <News key={news._id} news={news}></News>
          ))}
        </div>

        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
