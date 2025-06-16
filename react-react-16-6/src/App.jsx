import React, { useState } from 'react';
import Input from './components/input';
import Button from './components/button';

function App() {
  const [latestInput, setLatestInput] = useState('');

  const handleValidInput = (value) => {
    setLatestInput(value);
    console.log('✔ Input hợp lệ:', value);
  };

  const handleClick = () => {
    alert(`Giá trị vừa nhập là: ${latestInput}`);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-1">
      <h1 className="text-2xl font-bold">Đại đại đi</h1>
      <Input onValidInput={handleValidInput} />
      <Button onClick={handleClick} label="Gửi" />
    </div>
  );
}

export default App;
