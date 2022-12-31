import React from "react";
import { Button, Col, Row } from "react-bootstrap";

export default function ControlButtons({ clearData, showData }) {
  return (
    <Row className="my-3">
      <Col>
        <div className="wrap-control d-flex justify-content-between">
          <Button className="px-5" variant="primary" onClick={clearData}>
            Clear all
          </Button>
          <Button className="px-5" variant="primary" onClick={showData}>
            Show all
          </Button>
        </div>
      </Col>
    </Row>
  );
}
