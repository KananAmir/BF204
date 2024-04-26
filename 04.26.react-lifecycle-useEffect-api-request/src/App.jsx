import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import Card from "./components/card";
// import axios from "axios";
import { getAllCustomers } from "./services/customer.services";
import CustomersTable from "./components/customers-table";
import AddCustomer from "./components/add-customer";

function App() {
  const [cardStatus, setCardStatus] = useState(false);
  const [customers, setCustomers] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   getCustomers();

  //   // return () => {};
  // }, [setCustomers]);

  useEffect(() => {
    getAllCustomers()
      .then((data) => {
        setLoading(true);
        // console.log(data);
        setCustomers(data);

        // console.log(customers);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // const BASE_URL = "https://northwind.vercel.app/api";

  // fetch(`${BASE_URL}/customers`).then((response) =>
  //   response.json().then((data) => {
  //     console.log(data);
  //   })
  // );

  // async function getCustomers() {
  //   try {
  //     const response = await axios(`${BASE_URL}/customers`);
  //     setCustomers(response.data);
  //     console.log(response.data);
  //     // return response.data;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // getCustomers();
  return (
    <>
      {console.log(customers)}
      <Header />
      {/* <button onClick={() => setCardStatus(true)}>Show</button>
      <button onClick={() => setCardStatus(false)}>Hide</button> */}

      <button onClick={() => setCardStatus(!cardStatus)}>Toogle Card</button>
      {/* {cardStatus ? <Card /> : null} */}
      <hr />
      {cardStatus && <Card />}

      <hr />
      <hr />
      <AddCustomer customers={customers} setCustomers={setCustomers} />
      {loading ? (
        "LOADINGGG"
      ) : (
        <CustomersTable customers={customers} setCustomers={setCustomers} />
      )}
      <Footer />
    </>
  );
}

export default App;
