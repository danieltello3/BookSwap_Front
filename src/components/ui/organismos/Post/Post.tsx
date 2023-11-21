import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

const Post = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentVisible, setCommentVisible] = useState(false);
  const [commentCount, setCommentCount] = useState(); // Número de comentarios estático para el ejemplo

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleCommentClick = () => {
    setCommentVisible(!commentVisible);
  };

  return (
    <div className="bg-white mt-3">
      <img
        className="border rounded-t-lg shadow-lg"
        src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        alt="Post Image"
      />
      <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
        A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
      </div>
      <div className="bg-white p-1 border shadow flex flex-row flex-wrap items-center">
        <div
          className="w-1/2 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold cursor-pointer"
          onClick={handleLikeClick}
        >
          <span className="flex items-center justify-center">
            {liked ? <FaHeart /> : <FaRegHeart />}
          </span>
          <span className="ml-1">{likeCount}</span>
        </div>
        <div
          className="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold cursor-pointer"
          onClick={handleCommentClick}
        >
          Comment
          <span className="ml-1">{commentCount}</span>
        </div>
      </div>

      {commentVisible && (
        <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
          <div className="w-full">
            <div className="w-full text-left text-xl text-teal-700">
              @Some Person
            </div>
            <div className="w-full text-left text-xl text-black-200 font-light">
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-left text-xl text-teal-700">
              @Some Person
            </div>
            <div className="w-full text-left text-xl text-black-200 font-light">
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
            A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
