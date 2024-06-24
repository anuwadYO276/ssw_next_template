"use client";

import Accordion1 from "../components/accordion1";

export default function Accordion() {

  return (
    <>
      <br /><br /><br /><br />
      <div className="container">
        <h1>Accordion</h1>
        <small>Click on the buttons to see the effect</small>
        <div className="row mt-3">
          <div className="col-lg-6">

          <Accordion1 />

          </div>
        </div>
      </div>
    </>
  );
}
