import React, {useState} from 'react';
import InputValidate  from './input/InputValidate';
import Debouncer from './input/Debouncer';


const debouncer = new Debouncer(300);

const Input = ({ onValidInput }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const inputVal = e.target.value;
    setValue(inputVal);

    const result = InputValidate.minLength(inputVal, 3);
    if (!result.valid) {
      setError(result.error);
    } else {
      setError('');
      debouncer.run(() => {
        onValidInput(inputVal);
      });
    }
  };

  return (
    <div className="flex flex-col items-start gap-1">
      <input
        value={value}
        onChange={handleChange}
        placeholder="Nhập gì đó..."
        className="px-4 py-2 border rounded-md w-80"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
export default Input;