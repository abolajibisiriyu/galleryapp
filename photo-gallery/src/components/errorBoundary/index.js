import React from "react";
import bugsnag from "@bugsnag/js";
import bugsnagReact from "@bugsnag/plugin-react";

const bugsnagClient = bugsnag("927761e8a9b4514d1a0164b1b3f0fd2a");
bugsnagClient.use(bugsnagReact, React);

// wrap your entire app tree in the ErrorBoundary provided
const ErrorBoundary = bugsnagClient.getPlugin("react");

export default ErrorBoundary;
