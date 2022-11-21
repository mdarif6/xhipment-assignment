import "./PostsCard.css";
import React, { useState } from "react";
import { useAuth } from "../../context/auth-context";

import Modal from "../modal/Modal";

export default function PostsCard({ item, deletePost, editPost }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editBody, setEditBody] = useState(item.body);
  const { state } = useAuth();

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
          <div className="avatar avatar-xsm avt-text">{avatarText}</div>

          {state.userDetails.googleId ? (
            <div>
              {isEdit ? (
                <button
                  className="post-icon-button"
                  onClick={() => saveHandle()}
                >
                  <i className="fas fa-save"></i>
                </button>
              ) : null}

              {isEdit ? null : (
                <button
                  className="post-icon-button"
                  onClick={() => setIsEdit(true)}
                >
                  <i className="fas fa-edit"></i>
                </button>
              )}

              <button
                className="post-icon-button"
                onClick={() => setIsOpen(true)}
              >
                <i className="fas fa-trash"></i>
              </button>
            </div>
          ) : null}
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="post-delete-confirmation">
            <h3 className="post-delete-confirmation-heading">Are you sure ?</h3>
            <div className="post-delete-confirmation-button-wrapper">
              <button
                className="post-btn-secondary"
                onClick={() => deletePost(item.id)}
              >
                Yes
              </button>
              <button
                className="post-btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
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
