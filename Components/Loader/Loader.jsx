import { CircularProgress } from "@mui/material";
import React from "react";

function Loader() {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="centered">
          <CircularProgress />
        </div>
      </div>
    </div>
  );
}

export default Loader;
