import React from "react";
import { Col, Row } from "react-bootstrap";

export default function DatesCount({ length }) {
  return (
    <Row>
      <Col className="fs-3 py-4">Dates Count: {length}</Col>
    </Row>
  );
}
