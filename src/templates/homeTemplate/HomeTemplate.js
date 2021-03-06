import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    ></Route>
  );
};
