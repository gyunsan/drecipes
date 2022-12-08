import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import ImageSrc from "../../asset/icons.png";
import { getAllRecipesWithAllData } from "../../helpers/api-util";
import Drawer from "../drawer/drawer";
import RecipesSearch from "../recipes/recipes-search";
import { SearchContact } from "./layout";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  const { search, setSearch } = useContext(SearchContact);
  const [drawer, setDrawer] = useState(false);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    (async () => {
      const allRecipes = await getAllRecipesWithAllData();
      const options = allRecipes.map((recipe) => recipe.title);
      setOptions(options);
    })();
  }, []);
  return (
    <header className={classes.header}>
      <Drawer isOpen={drawer} setIsOpen={setDrawer}>
        <nav className="mt-10">
          <ul className="flex flex-col">
            <RecipesSearch
              display={true}
              options={options}
              search={search}
              setSearch={setSearch}
            />

            <li className="border-b-2 border-b-gray w-4/5 m-3 mb-3 pb-4">
              <Link onClick={() => setDrawer(false)} href="/recipes">
                <p className="text-black hover:underline ml-2">Recipes</p>
              </Link>
            </li>
            <li className="border-b-2 border-b-gray w-4/5 m-3 mb-3 pb-4">
              <Link onClick={() => setDrawer(false)} href="/hamburger">
                <p className="text-black hover:underline ml-2">Hamburger</p>
              </Link>
            </li>

            <li className="border-b-2 border-b-gray w-4/5 m-3 mb-3 pb-4">
              <Link onClick={() => setDrawer(false)} href="/blog">
                <p className="text-black hover:underline ml-2">Blog</p>
              </Link>
            </li>
            <li className="border-b-2 border-b-gray w-4/5 m-3 mb-3 pb-4">
              <Link onClick={() => setDrawer(false)} href="/contact">
                <p className="text-black hover:underline ml-2">Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
      </Drawer>
      <Link className="sm:block" href="/">
        <Logo />
      </Link>

      <RecipesSearch options={options} search={search} setSearch={setSearch} />

      <Image
        src={ImageSrc}
        width={50}
        height={50}
        alt="item"
        onClick={() => setDrawer(true)}
        className="cursor-pointer"
      />
    </header>
  );
}

export default MainNavigation;
