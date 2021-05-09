import React, { useState, useEffect } from "react";
import "../Sass/Form.sass";

const Form = () => {
  //have a hook to hold an array of objects
  //object has currency, image, selected key, and amount
  //if selected loop through array and set old
  return (
    <div className="wrapper text-center">
      <div className="background">
        <div className="input-group mb-3">
          <input
            type="text"
            class="form-control"
            value="Enter amount"
            aria-label="Enter amount"
            aria-describedby="button-addon2"
            onFocus={(e) => {
              e.target.value = "";
            }}
          />
          <div className="input-group-append">
            <select className="custom-select">
              <option selected>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>CAD</option>
              <option>ARS</option>
              <option>AUD</option>
              <option>IMR</option>
              <option>PTE</option>
              <option>JPY</option>
              <option>RUB</option>
              <option>CHF</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
