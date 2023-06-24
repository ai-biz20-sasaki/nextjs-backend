'use client';
import { useState, useEffect, ChangeEvent } from 'react';

export default function Page() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleSaveClick = async () => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: content, title: title }),
    });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <input
        placeholder='title'
        value={title}
        onChange={handleTitleChange}
      />
      <input
        placeholder='content'
        value={content}
        onChange={handleContentChange}
      />
      <button onClick={handleSaveClick}>
        Save
      </button>
      
    </div>
  )
}