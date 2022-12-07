import { useState } from "react";
import { useRef } from "react";
import Autocomplete from "../search/Autocomplete";

import Button from "../ui/button";
import classes from "./recipes-search.module.css";

function RecipesSearch({ setSearch, search, options }) {
  const [searchKeys, setSearchKeys] = useState(search);

  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <Autocomplete
          options={options}
          value={searchKeys}
          onChange={setSearchKeys}
        />
        {/* <input
          onChange={(e) => setSearchKeys(e.target.value)}
          type="search"
          class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-primary
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
      "
          id="exampleSearch"
          placeholder="Recipe search by title"
        /> */}
      </div>
      <Button type={"button"} onClick={() => setSearch(searchKeys)}>
        Find Recipes
      </Button>
    </form>
  );
}

export default RecipesSearch;
