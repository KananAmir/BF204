import React, { useState } from "react";
import { addNewCustomer } from "../../services/customer.services";
import { nanoid } from "nanoid";

const AddCustomer = ({ customers, setCustomers }) => {
  const [customerObj, setCustomerObj] = useState({
    id: "",
    companyName: "",
    address: { street: "", city: "", country: "" },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(customerObj);
    customerObj.id = nanoid();
    addNewCustomer(customerObj);
    const newCustomers = [...customers];

    newCustomers.push(customerObj);
    // console.log(newCustomers);
    setCustomers(newCustomers);
  };

  return (
    <form style={{ margin: "30px 0" }} onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="company name"
        onChange={(e) =>
          setCustomerObj({ ...customerObj, companyName: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="street"
        onChange={(e) =>
          setCustomerObj({
            ...customerObj,
            address: { ...customerObj.address, street: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="city"
        onChange={(e) =>
          setCustomerObj({
            ...customerObj,
            address: { ...customerObj.address, city: e.target.value },
          })
        }
      />
      <input
        type="text"
        placeholder="country"
        onChange={(e) =>
          setCustomerObj({
            ...customerObj,
            address: { ...customerObj.address, country: e.target.value },
          })
        }
      />
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default AddCustomer;
