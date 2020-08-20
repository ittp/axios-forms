import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

import axios from "axios";

import qs from "qs";

// const state = {
//   loading: true,
//   error: "",
//   form: null
// };

const SendServer = (data) => {
  let config = {
    method: "post",
    url: "https://api.ittpd.ru/items",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTk3NzUyNTE0LCJleHAiOjE2MDAzNDQ1MTR9.M6cAyPHsLKqB6IK5u9lRypO-OvwP2rUmyrhAo1wfmic",
      "Content-Type": "application/json"
    },
    data: data
  };
  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const FormikView = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        order: "131/",
        cargo: "STEEL",
        quantity: "100",
        gross: "000000",
        port: "SPB, RUSSIA"
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        axios.post();
        console.log(values);
        SendServer(values);
      }}
    >
      <Form>
        <Field id="order" name="order" placeholder="Order" />
        <Field id="cargo" name="cargo" placeholder="Cargo" />
        <Field
          type="number"
          id="quantity"
          name="quantity"
          placeholder="Quantity"
        />
        <Field id="gross" name="gross" placeholder="GW" />
        <Field id="port" name="port" placeholder="Port" />
        <button key type="submit">
          {" "}
          Submit{" "}
        </button>
      </Form>
    </Formik>
  </div>
);

ReactDOM.render(<FormikView />, document.getElementById("root"));
