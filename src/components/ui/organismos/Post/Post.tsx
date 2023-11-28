import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { PostService } from "../../../../services/PostService";
import { Like } from "../../../../services/PostService";

const Post = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentVisible, setCommentVisible] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Cargar mensajes al montar el componente
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      // Invoca la función mostrarPosts
      const postsData = await PostService.mostrarPosts();
      setPosts(postsData);
    } catch (error) {
      console.error('Error al cargar mensajes:', error);
    }
  };

  // const handleLikeClick = async (postId) => {
  //   try {
  //     // Envía el like al backend
  //     await Like(postId);
  
  //     // Actualiza el contador de likes
  //     setLikeCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  
  //     // Cambia el estado de liked
  //     setLiked(!liked);
  //   } catch (error) {
  //     console.error('Error al dar like:', error);
  //   }
  // };

  const handleCommentClick = () => {
    setCommentVisible(!commentVisible);
  };

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="bg-white mt-3">
          <img
            className="border rounded-t-lg shadow-lg"
            src={post.PostImage}
            alt="Post Image"
          />
          <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
            <p className="text-teal-700">{post.User}</p>
            <p>{post.PostText}</p>
          </div>
          <div className="bg-white p-1 border shadow flex flex-row flex-wrap items-center">
            <div
              className="w-1/2 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold cursor-pointer"
              onClick={() => handleLikeClick(post.id)}
            >
              <span className="flex items-center justify-center">
                {liked ? <FaHeart /> : <FaRegHeart />}
              </span>
              <span className="ml-1">{likeCount + post.Like}</span>
            </div>
            <div
              className="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold cursor-pointer"
              onClick={handleCommentClick}
            >
              Comment
              <span className="ml-1">({commentCount + post.NumeroDeComentarios})</span>
            </div>
          </div>

          {commentVisible && (
            <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
              {post.Comentarios.map((comentario, index) => (
                <div key={index} className="w-full">
                  <div className="w-full text-left text-xl text-teal-700">
                    {comentario.Usuario}
                  </div>
                  <div className="w-full text-left text-xl text-black-200 font-light">
                    {comentario.Comentario}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Post;
