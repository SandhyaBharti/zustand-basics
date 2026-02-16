import { useState, useEffect } from "react";

const useDebounce = (data, delay = 500) => {
  const [value, setValue] = useState(data);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(data);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [data, delay]);

  return value;
};

export default useDebounce;
