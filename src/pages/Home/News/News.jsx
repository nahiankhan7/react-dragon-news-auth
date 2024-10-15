import React from "react";
import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const News = ({ news }) => {
  const { _id, author, title, image_url, details, rating, total_view } = news;

  return (
    <div className="my-6 border rounded-lg overflow-hidden shadow-md">
      <div className="flex items-center justify-between bg-gray-200 p-4">
        <div className="flex items-center">
          <img
            src={author.img}
            alt={`${author.name}'s profile`}
            className="w-14 h-14 rounded-full border border-gray-300"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {author.name}
            </h3>
            <span className="text-gray-500 text-sm">
              {author.published_date}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <FaRegBookmark className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-200" />
          <BsShare className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-200" />
        </div>
      </div>
      <div className="p-6 bg-white">
        <h2 className="my-4 text-2xl font-bold text-gray-900">{title}</h2>
        <figure>
          <img
            src={image_url}
            alt={title}
            className="my-4 w-full h-auto rounded-lg shadow-md"
          />
        </figure>
        <div>
          {details.length > 200 ? (
            <p className="mb-4 text-gray-700">
              {details.slice(0, 200)}{" "}
              <Link
                to={`/news/${_id}`}
                className="cursor-pointer text-lg font-medium text-orange-600 hover:underline">
                Read More...
              </Link>
            </p>
          ) : (
            <p className="text-gray-700">{details}</p>
          )}
        </div>
        <hr className="border-gray-300 my-4" />
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-gray-600">Rating:</span>
            <p className="ml-2 text-gray-800 font-semibold">
              {rating?.number}
            </p>{" "}
          </div>

          <div className="flex items-center gap-x-3">
            <FaEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  news: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    author: PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      number: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default News;
