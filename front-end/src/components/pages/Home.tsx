import { useState } from "react";
import Header from "../layouts/Header";
import styles from "./Home.module.css";

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      { Header() }
      <div className={ styles.content }>
        <h1 className={ styles.h1 }>Value: { count }</h1>
        <div>
          <button className={ styles.button } onClick={ increment }>+</button>
          <button className={ styles.button } onClick={ decrement }>-</button>          
        </div>

      </div>
    </>
  );
}

export default Home;