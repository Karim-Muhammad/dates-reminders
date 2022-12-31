import React from "react";
import "./DatesComponent.css";

export default function DatesComponent({ name, time, img }) {
  return (
    <div className="date-comp my-3 py-3 d-flex align-items-center gap-2 date border-bottom">
      <img src={img} alt="person" />
      <div className="date-info">
        <p className="my-0 fs-5">{name}</p>
        <p className="my-0 fs-6 text-secondary">{time}</p>
      </div>
    </div>
  );
}
