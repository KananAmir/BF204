import { useState } from "react";
import { Button, Table, Tooltip, Popconfirm, message, Modal } from "antd";
import {
  deleteDataById,
  getAllData,
  getDataById,
  updateDataById,
} from "../../services";
import { render } from "sass";

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park",
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park",
//   },
// ];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const ProductsTable = ({ products, setProducts }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const confirm = (id) => {
    handleDelete(id);
    message.success("Deleted succesfully!");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await updateDataById(editId, editData);
    const updatedData = await getAllData();
    setProducts(updatedData.data);
    setOpen(false);
  };
  const handleDelete = (id) => {
    deleteDataById(id).then((res) => {
      if (res.status === 200) {
        const filtered = [...products].filter((q) => q.id !== id);
        setProducts(filtered);
      }
    });
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (element, data, i) => {
        return <img src={element} alt={data.title} width={50} />;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
      render: (element, data, i) => (
        <Tooltip title={element}>
          <span>{element.slice(0, 30)}...</span>
        </Tooltip>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (element, data, i) => (
        <Tooltip title={element}>
          <span>{element.slice(0, 50)}...</span>
        </Tooltip>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (element, data, index) => {
        return `$${element}`;
      },
    },
    {
      title: "Delete",
      dataIndex: "DELETE",
      render: (element, data, index) => {
        return (
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(data.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        );
      },
    },
    {
      title: "Edit",
      dataIndex: "edit",
      render: (element, data, index) => {
        return (
          <Button
            type="primary"
            onClick={async () => {
              setOpen(true);
              setEditId(data.id);
              const editedProduct = await getDataById(data.id);
              setEditData({
                title: editedProduct.data.title,
                price: editedProduct.data.price,
                description: editedProduct.data.description,
                image: editedProduct.data.image,
              });
            }}
            form="edit-id"
          >
            Edit
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={products}
        onChange={onChange}
        pagination={{ pageSize: 5 }}
        rowKey={"id"}
      />
      <Modal
        title="Title"
        okType="none"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
        footer={false}
      >
        <form id="edit-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="title"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="price"
            value={editData.price}
            onChange={(e) =>
              setEditData({ ...editData, price: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="description"
            value={editData.description}
            onChange={(e) =>
              setEditData({ ...editData, description: e.target.value })
            }
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="img url"
            value={editData.image}
            onChange={(e) =>
              setEditData({ ...editData, image: e.target.value })
            }
          />
          <br />
          <br />
          <button
            type="submit"
            style={{ backgroundColor: "teal", color: "white" }}
          >
            Edit
          </button>
        </form>
      </Modal>
    </>
  );
};

export default ProductsTable;
