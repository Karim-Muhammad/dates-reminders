import React from "react";
import { Col, Row } from "react-bootstrap";

import "./ShowList.css";

import DatesComponent from "../DatesComponent";

export default function ShowList({ dates }) {
  return (
    <Row className="list-dates">
      <Col className="">
        {dates.length ? (
          dates.map((date) => (
            <DatesComponent
              key={date.id}
              name={date.name}
              time={date.date}
              img={`person${date.id}.jpg`}
            />
          ))
        ) : (
          <h3 className="text-center">No Dates exist now</h3>
        )}
      </Col>
    </Row>
  );
}
