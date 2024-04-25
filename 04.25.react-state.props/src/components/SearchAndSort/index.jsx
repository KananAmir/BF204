import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function SearchAndSort({ data, setData, searchQuery, setSearchQuery }) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Form>
      <Container>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"zz
            // className="d-flex gap-2 align-items-center"
          >
            <Form.Control
              required
              placeholder="search..."
              type="text"
              onChange={(e) => handleSearch(e)}
              defaultValue={search}
            />
          </Form.Group>
        </Row>
        {/* <Button type="button">Sort Course</Button> */}
      </Container>
    </Form>
  );
}

export default SearchAndSort;
