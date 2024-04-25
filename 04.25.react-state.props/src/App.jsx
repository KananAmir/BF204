import "./App.css";
import Courses from "./components/Courses";
import array from "./data/data";
import "bootstrap/dist/css/bootstrap.min.css";
import AddForm from "./components/AddForm";
import { useState } from "react";
import SearchAndSort from "./components/SearchAndSort";
// import catImg from "./assets/images/cat.jpg";
function App() {
  const [data, setData] = useState(array);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = data.filter((q) => {
    return q.name
      .toLowerCase()
      .trim()
      .includes(searchQuery.trim().toLowerCase());
  });

  console.log(filteredCourses);
  return (
    <>
      <AddForm data={data} setData={setData} />
      {/* <SearchAndSort
        data={data}
        setMyData={setData}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      /> */}
      <Courses data={filteredCourses} setData={setData} />
    </>
  );
}

export default App;
