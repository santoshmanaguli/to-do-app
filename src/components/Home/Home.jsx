import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import TodoList from "../TodoList/TodoList";

const Home = () => {
  const[arr, setArr] = useState([])
  const[inputTxt, setInputTxt] = useState();

  useEffect(() => {
    console.log(arr);
  }, [arr])

  const handleAdd = () => {
    console.log(arr, inputTxt)
    const obj = {
      id: Math.random() * 100,
      tsk: inputTxt,
    }
    console.log(obj);
    setArr([...arr, obj])
    console.log(arr);
    setInputTxt('')
  }

  return (
    <div className={styles.container}>
      <div className={styles.homePageHeader}>
        <h1>Enter Your Task</h1>
      </div>
      <div className={styles.inputElement}>
        <input type="text" className={styles.todoInput} value={inputTxt} onChange={(e) => {setInputTxt(e.target.value)}} />
        <button type="button" className={`cursor-pointer ${styles.todoSubmitBtn}`} onClick={handleAdd}>
          +
        </button>
      </div>
      <TodoList tasks={arr} />
    </div>
  );
};

export default Home;
