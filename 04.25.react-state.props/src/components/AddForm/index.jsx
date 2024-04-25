import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { nanoid } from "nanoid";

class Course {
  constr;
}
function AddForm({ data, setData }) {
  const [courseName, setCourseName] = useState("");
  const [coursePrice, setCoursePrice] = useState(0);
  const [courseImage, setCourseImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("hello");
    let newCourse = {
      id: nanoid(),
      name: courseName,
      price: coursePrice,
      img: courseImage,
    };
    console.log(newCourse);
    setData([...data, newCourse]);
    setCourseName("");
    setCoursePrice(0);
    setCourseImage("");
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        onChange={(e) => setCourseName(e.target.value)}
        value={courseName}
      />
      <input
        type="number"
        onChange={(e) => setCoursePrice(e.target.value)}
        value={coursePrice}
      />
      <input
        type="text"
        onChange={(e) => setCourseImage(e.target.value)}
        value={courseImage}
      />
      <button type="submit">Add Course</button>
    </form>
  );
}

export default AddForm;
