'use client';
import { useState, ChangeEvent } from 'react';

export default function Page() {

  const [name, setName] = useState('');
  const [email, setEmai] = useState('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmai(event.target.value);
  };

  const handleSaveClick = async () => {
    //TODO:DBに書き込み成功するが、なぜか下記のエラーログが表示される。要調査
    //error TypeError: Cannot read properties of undefined (reading 'headers')at eval (webpack-internal:///(sc_server)/./node_modules/next/dist/server/future/route-modules/app-route/module.js:277:61)
    ///api/users で return NextResponse.json(data); するとエラーがでなくなった？
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email: email }),
    });
    setName('');
    setEmai('');
  };

  return (
    <div>
      <input
        placeholder='name'
        value={name}
        onChange={handleNameChange}
      />
      <input
        placeholder='email'
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleSaveClick}>
        Save
      </button>
      
    </div>
  )
}