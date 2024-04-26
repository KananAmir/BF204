import { deleteDataById } from "../../services/customer.services";

const CustomersTable = ({ customers, setCustomers }) => {
  const handleDelete = (id) => {
    // console.log(id);
    deleteDataById(id).then((res) => {
      if (res.status === 200) {
        const updatedCustomer = [...customers.filter((q) => q.id !== id)];
        setCustomers(updatedCustomer);
      }
    });
    // const updatedCustomer = [...customers.filter((q) => q.id !== id)];

    setCustomers(updatedCustomer);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>Street</th>
          <th>City, Country</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {customers &&
          customers.map((customer) => {
            return (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.companyName}</td>
                <td>{customer.address?.street}</td>
                <td>
                  {customer.address?.city}, {customer.address?.country}
                </td>
                <td>
                  <button>EDIT</button>
                  <button onClick={() => handleDelete(customer.id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CustomersTable;
