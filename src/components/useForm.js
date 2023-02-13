import { useState } from 'react';

export default function useForm(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleClick = (e) => {
    e.preventDefault();

    setValue((prev) => !prev);
  };

  return {
    value,
    handleClick,
  };
}
