import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./scss/TodoInput.scss";

const TodoInput = ({ onAdd }) => {

  const [userInput, setUserInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleInput = () => {
    setUserInput(!userInput);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue(""); // 입력 필드 초기화
    }
  };

  return (
    <>
      <div className="form-wrapper">
        {userInput && (
          <form className="insert-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="할 일을 입력 후, 엔터를 누르세요!"
              value={inputValue}
              onChange={handleChange}
            />
          </form>
        )}
      </div>
      <button
        onClick={toggleInput}
        className={`insert-btn ${userInput ? "open" : ""}`}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoInput;
