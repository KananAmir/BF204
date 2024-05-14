const express = require("express");
let products = require("./db.js");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", (req, res) => {
  res.send(`<h2>lorem ipsum dolor</h2>`);
});

app.get("/message", (req, res) => {
  res.json({ message: "hello world!" });
});

//get all products
app.get("/products", (req, res) => {
  if (products.length > 0) {
    res.status(200).send({
      data: products,
      message: "success",
    });
  } else {
    console.log("test");
    res.send({ message: "data is empty!", data: null }).status(204);
  }
});

//get product by id

app.get("/products/:id", (req, res) => {
  //   const id = req.params.id;
  const { id } = req.params;

  console.log(req.params);
  const product = products.find((item) => item.id === id);

  if (product !== undefined) {
    res.status(200).send({
      data: product,
      message: "success",
    });
  } else {
    res.send({ message: "not found!" }).status(404);
  }
});

//delete product by id

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const indx = products.findIndex((item) => item.id === id);

  if (indx === -1) {
    res.status(404).send({ message: "failed to delete, no such product!" });
  } else {
    const deletedProduct = products.splice(indx, 1);
    res.status(200).send({
      message: "deleted succesfully!",
      data: deletedProduct,
    });
  }
});

//post new product

app.post("/products", (req, res) => {
  const { title, price, description, category, image, rating } = req.body;

  const product = {
    id: uuid.v4(),
    title,
    price,
    description,
    category,
    image,
    rating,
  };

  products.push(product);
  res.status(201).send({
    message: "created succesfully!",
    data: product,
  });
});

// update data, put

app.put("/products/:id", (req, res) => {
  const { id } = req.params;

  const { title, price, description, category, image, rating } = req.body;

  const indx = products.findIndex((item) => item.id === id);
  console.log(indx);

  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  };

  // products[indx] = product;
  products.splice(indx, 1, product);

  //   console.log(product);
  res.status(200).send({
    message: "succesfully updated!",
    data: product,
  });
});

// update data, patch

app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, description, category, image, rating } = req.body;

  //   const indx = products.findIndex((item) => item.id === id);
  const product = products.find((item) => item.id === id);

  if (title !== undefined) {
    product.title = title;
  }
  if (price !== undefined) {
    product.price = price;
  }
  if (description !== undefined) {
    product.description = description;
  }
  if (category !== undefined) {
    product.category = category;
  }
  if (image !== undefined) {
    product.image = image;
  }
  if (rating !== undefined) {
    product.rating = rating;
  }

  res.status(200).send({
    message: "updated succesfully!",
    data: product,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
