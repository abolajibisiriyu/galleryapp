import React from "react";

import { Cont } from "./elements";
import { toast } from "react-toastify";
import SVG from "react-inlinesvg";

const config = {
  position: toast.POSITION.TOP_CENTER
};

const Container = ({ src, className, msg }) => (
  <Cont>
    <SVG src={src} className={className} /> {msg}
  </Cont>
);

export const toastError = err =>
  toast.error(
    <Container
      msg={err}
      className="toast-danger-icon"
      src="https://res.cloudinary.com/drqqv1c2v/image/upload/v1543619703/danger.svg"
    />,
    config
  );

export const toastSuccess = msg =>
  toast.success(
    <Container
      msg={msg}
      className="toast-success-icon"
      src="https://res.cloudinary.com/drqqv1c2v/image/upload/v1543619743/success.svg"
    />,
    config
  );

export const toastWarning = msg => {
  toast.warn(
    <Container
      msg={msg}
      className="toast-warning-icon"
      src="https://res.cloudinary.com/drqqv1c2v/image/upload/v1543619814/warning.svg"
    />,
    config
  );
};
