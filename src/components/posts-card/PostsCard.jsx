import "./PostsCard.css";
import React, { useState } from "react";
import { useAuth } from "../../pages/common/auth-context";

export default function PostsCard({ item, deletePost, editPost }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editBody, setEditBody] = useState(item.body);
  const { state, dispatch } = useAuth();

  const avatarText =
    item.title.charAt(0).toUpperCase() + item.body.charAt(0).toUpperCase();
  function saveHandle() {
    editPost(item.id, item.userId, editTitle, editBody);
    setIsEdit(false);
  }
  return (
    <div className="post-card">
      <div className="post-image"></div>
      <div className="post-content">
        <div className="postcard-action-icons">
          <div class="avatar avatar-xsm avt-text">{avatarText}</div>

          {state.userDetails.googleId ? (
            <div>
              {isEdit ? (
                <button
                  className="post-icon-button"
                  onClick={() => saveHandle()}
                >
                  <i class="fas fa-save"></i>
                </button>
              ) : null}

              {isEdit ? null : (
                <button
                  className="post-icon-button"
                  onClick={() => setIsEdit(true)}
                >
                  <i class="fas fa-edit"></i>
                </button>
              )}

              <button
                className="post-icon-button"
                onClick={() => deletePost(item.id)}
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          ) : null}
        </div>
        <div className="post-title-description">
          <div>
            {isEdit ? (
              <textarea
                name=""
                id=""
                cols="30"
                rows="3"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              ></textarea>
            ) : (
              <div className="post-title">{item.title}</div>
            )}
          </div>

          <div>
            {isEdit ? (
              <textarea
                name=""
                id=""
                cols="30"
                rows="8"
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
              ></textarea>
            ) : (
              <div>{item.body}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
