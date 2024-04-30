import { useState } from "react";
import "./App.css";
import Logout from "./components/logout";
import Login from "./components/login";
import Wellcome from "./components/wellcome";
import Product from "./components/product";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Logout setIsLoggedIn={setIsLoggedIn} />
          <Wellcome />
          <Product />
        </>
      ) : (
        <>
          <Login setIsLoggedIn={setIsLoggedIn} />
        </>
      )}
    </>
  );
}

export default App;
