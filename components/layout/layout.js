import { useRouter } from "next/router";
import { useEffect } from "react";
import { createContext, Fragment, useState } from "react";
import Footer from "../footer/Footer";

import MainNavigation from "./main-navigation";
export const SearchContact = createContext({});

function Layout(props) {
  const { query, pathname, push } = useRouter();
  const [search, setSearch] = useState(query?.search);
  useEffect(() => {
    return () => {
      if (search && pathname !== "/recipes") {
        push("/recipes", {
          query: {
            ...query,
          },
        });
      }
    };
  }, [search]);

  return (
    <SearchContact.Provider value={{ search, setSearch }}>
      <Fragment>
        <MainNavigation />
        <main>{props.children}</main>
        <Footer />
      </Fragment>
    </SearchContact.Provider>
  );
}

export default Layout;
