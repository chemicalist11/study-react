import Head from "next/head";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />

      {props.isShow ? <h1>{props.count}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>
        {props.isShow ? "非表示" : "表示"}
      </button>

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <Main page="index" />
    </>
  );
};

export default Home;
