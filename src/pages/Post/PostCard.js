import React, { useEffect, useState } from "react";

const PostCard = ({ post }) => {
  const [formatedDate, setFormatedDate] = useState("");

  useEffect(() => {
    if (post.createdAt) {
      let date = post.createdAt;
      date /= 1000;
      const dateInstance = new Date(date);
      setFormatedDate(
        `${dateInstance.getDate()}-${
          dateInstance.getMonth() + 1
        }-${dateInstance.getFullYear()}`
      );
    }
  }, [post]);

  return (
    <div className="flex items-center justify-between border border-solid border-gray-500 p-3 w-96 my-5 mx-3">
      <div>
        <h1 className="text-lg font-bold">{post.title}</h1>
        <p>
          <span>Author Name: </span>
          <span>{post.author.name}</span>
        </p>
        <p>
          <span>{post.content}</span>
        </p>
      </div>
      <div>
        <p>
          <span>Date: </span>
          <span>{formatedDate}</span>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
