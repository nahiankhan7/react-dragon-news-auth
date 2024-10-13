import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import News from "./News/News";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

const Home = () => {
  const allNews = useLoaderData() || [];

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
        <div>
          <LeftSideNav />
        </div>

        <div className="md:col-span-2 py-4">
          <h2 className="text-2xl font-semibold">Dragon News Home</h2>
          {allNews.length > 0 ? (
            allNews.map((news) => <News key={news._id} news={news} />)
          ) : (
            <p className="text-gray-500">No news available at the moment.</p>
          )}
        </div>

        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  allNews: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Home;
