import "./Posts.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CreatePost from "../../components/create-post/CreatePost";
import Header from "../../components/header/Header";
import PostsCard from "../../components/posts-card/PostsCard";

export default function Posts() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    async function getPostsData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (response.status === 200) {
          setPostsData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getPostsData();
  }, []);

  async function createPost(title, body, userId) {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: title,
          body: body,
          userId: userId,
        }
      );

      if (response.status === 201) {
        setPostsData((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(deleteId) {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${deleteId}`
      );

      if (response.status === 200) {
        let filterdPost = postsData.filter((item) => item.id !== deleteId);
        setPostsData(filterdPost);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editPost(itemId, userId, editTitle, editBody) {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${itemId}`,
        { id: itemId, title: editTitle, body: editBody, userId: userId }
      );

      if (response.status === 200) {
        let selectedPostIndex = postsData.findIndex(
          (item) => item.id === itemId
        );
        let postsDataCopy = [...postsData];
        postsDataCopy.splice(selectedPostIndex, 1, response.data);
        setPostsData(postsDataCopy);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const sortPosts = (posts) => posts.sort((a, b) => b.id - a.id);
  const sortedPosts = sortPosts(postsData);

  return (
    <div>
      <Header />
      <CreatePost createPost={createPost} />
      <div className="posts-wrapper">
        <h2 className="posts-heading">Recent Posts</h2>
        <div className="posts-cards">
          {sortedPosts &&
            sortedPosts.map((item) => {
              return (
                <PostsCard
                  key={item.id}
                  item={item}
                  editPost={editPost}
                  deletePost={deletePost}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
