import { CircularProgress } from "@mui/material";
import React from "react";

function PaymentLoader() {
  return (
    <div className="centered_loader text-center">
      <CircularProgress />
    </div>
  );
}

export default PaymentLoader;
