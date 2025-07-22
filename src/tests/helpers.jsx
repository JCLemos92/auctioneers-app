import { render as renderRtl } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { StoreProvider } from "../store/useStore";
import test_vehicles_dataset from "./testVehicles.json";

export const TEST_INITIAL_STATE = {
  vehicles: test_vehicles_dataset,
};

export const render = (children) => {
  return renderRtl(
    <StoreProvider initialValues={TEST_INITIAL_STATE}>
      <BrowserRouter>{children}</BrowserRouter>
    </StoreProvider>
  );
};
