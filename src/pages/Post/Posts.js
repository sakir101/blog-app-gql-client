import React from "react";
import PostCard from "./PostCard";
import { gql, useQuery } from "@apollo/client";

const GET_POST = gql`
  query PostData {
    posts {
      title
      content
      createdAt
      published
      author {
        name
      }
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(GET_POST);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <h1 className="text-center font-bold text-5xl my-4 pb-4">Posts</h1>
      <hr />
      <div className="flex flex-wrap justify-center">
        {data.posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
