import Image from "next/image";
import Link from "next/link";
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
        setPosts(() => postsData);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  useEffect(() => {
    if (posts.length < 1) {
      getAlPosts();
    }
  }, []);

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <div className="Posts-container" key={post.id}>
          <Image src={post.image} width={200} height={200} alt={post.slug} />
          <h2 className="Posts-title">
            {post.id}.{post.title}
          </h2>
          <p className="Posts-content">{post.content}</p>
          <Link href={post.url} target="_blank">
            {post.url}
          </Link>
        </div>
      );
    });
  };

  return <div className="Posts">{renderPosts()}</div>;
};

export default Examples;
