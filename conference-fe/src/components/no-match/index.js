import React from "react";
import { Redirect } from "react-router-dom";

export default function NoMatch(props) {

  return (
    <>
      <Redirect push to="/conferences" />
    </>
  );
}
