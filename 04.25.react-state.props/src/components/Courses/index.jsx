import Course from "../Course";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Courses({ data, setData }) {
  return (
    <Container className="mt-5">
      <Row>
        {data &&
          data.map((element, idx) => (
            <Col key={idx} className="my-3">
              <Course data={data} element={element} setData={setData} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Courses;
