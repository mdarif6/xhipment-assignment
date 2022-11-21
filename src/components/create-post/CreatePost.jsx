import "./CreatePost.css";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import { useAuth } from "../../context/auth-context";

export default function CreatePost({ createPost }) {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useAuth();

  function submitHandle(e) {
    e.preventDefault();
    createPost(title, body);
    setIsOpen(false);
  }

  return (
    <>
      {state.userDetails.googleId ? (
        <div className="login-welcome-message">
          Welcome {state.userDetails.name}
        </div>
      ) : null}

      <div className="post-create-heading-and-button">
        {state.userDetails.googleId ? (
          <button className="post-btn-primary" onClick={() => setIsOpen(true)}>
            Create New Post
          </button>
        ) : null}
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="post-form">
          <h3 className="post-create-heading">Create Your Post</h3>
          <form action="" onSubmit={submitHandle}>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                placeholder="write title"
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>
            <div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                placeholder="write description"
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>

            <button
              disabled={title === "" || body === ""}
              className={
                title === "" || body === ""
                  ? "post-btn-primary disabled-btn"
                  : "post-btn-primary"
              }
            >
              Create Post
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
