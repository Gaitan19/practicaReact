import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Examples = () => {
  const [posts, setPosts] = useState([]);

  const getAlPosts = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((postsData) => {
        // console.log("postsData :>> ", postsData);
        setPosts(() => postsData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    if (posts.length < 1) {
      //   const response = fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
      //   console.log("response :>> ", response);
      getAlPosts();
      //   console.log("posts :>> ", posts);
    }
  }, []);

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <div className="Posts" key={post.id}>
          <h2 className="Posts-title">
            {post.id}.{post.title}
          </h2>
          <p className="Posts-contet">{post.content}</p>
          <Link href={post.url} target="_blank">
            {post.url}
          </Link>
        </div>
      );
    });
  };

  return <div className="Container-posts">{renderPosts()}</div>;
};

export default Examples;
