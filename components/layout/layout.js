import { Fragment } from "react";
import Footer from "../footer/Footer";

import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
