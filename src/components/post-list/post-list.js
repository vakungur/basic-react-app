import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((item) => {
    return (
      <li className="list-group-item" key={item.id}>
        <PostListItem
          label={item.label}
          important={item.important}
          like={item.like}
          onDelete={() => onDelete(item.id)}
          onToggleImportant={() => onToggleImportant(item.id)}
          onToggleLiked={() => onToggleLiked(item.id)}
        />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
