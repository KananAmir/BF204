import { useRef } from "react";
import "./App.css";
import CardComp from "./components";
import ProductImages from "./components/product-images";
import Header from "./layouts/header";
import Products from "./components/products";

//useRef
function App() {
  const headingRef = useRef();
  const inputRef = useRef();
  return (
    <>
      <Header />
      <Products />
      <h1 ref={headingRef}>Lorem Ipsum Dolor</h1>
      <button onClick={() => console.log(headingRef.current.textContent)}>
        Click
      </button>
      <hr />
      <input type="search" name="" id="" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <hr />
      <CardComp headingRef={headingRef} />
      <hr />
      <ProductImages />
    </>
  );
}

export default App;
