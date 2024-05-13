import { Button, Table } from "antd";
import { useGetAllCustomersQuery } from "../../services/customersApi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../services/favsSlice";
const Customers = () => {
  const { data } = useGetAllCustomersQuery();
  const { favs } = useSelector((state) => state.favs);
  const dispatch = useDispatch();
  console.log(favs);

  const columns = [
    {
      title: "companyName",
      dataIndex: "companyName",
    },
    {
      title: "favs",
      render: (record) => {
        const isFavs = favs.find((q) => q.id === record.id);
        console.log(favs);
        return (
          <Button onClick={() => dispatch(toggle(record))}>
            {isFavs ? <FaHeart /> : <CiHeart />}
          </Button>
        );
      },
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      showSorterTooltip={{
        target: "sorter-icon",
      }}
      rowKey={"id"}
    />
  );
};

export default Customers;
