const { useState, useCallback } = require("react");

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);

  const handleChange = useCallback((e) => {
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(
    () =>
      setArray((prevArray) => {
        if (prevArray.some((item) => item === text)) {
          alert("同じ要素が既に存在しています。");
          return prevArray;
        }
        return [...prevArray, text];
      }),
    [text]
  );

  return { text, array, handleChange, handleAdd };
};
