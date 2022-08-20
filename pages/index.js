import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}

export default function Home({ todos }) {
  // const [todos, settodos] = useState([]);

  // useEffect(() => {
  //   const fetchtodos = async () => {
  //     setTimeout(async () => {
  //       const res = await fetch("http://jsonplaceholder.typicode.com/todos");
  //       const data = await res.json();
  //       console.log(data);
  //       settodos(data);
  //     }, 3000);
  //   };
  //   fetchtodos();
  // }, []);

  return (
    <div className={styles.container}>
      {todos?.map((item) => (
        <div>
          <p>
            {item.id}:{item.title}
          </p>
        </div>
      ))}
    </div>
  );
}
