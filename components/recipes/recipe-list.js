/* eslint-disable react-hooks/exhaustive-deps */
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import Drawer from "../drawer/drawer";
import RecipeItem from "./recipe-item";
import ImageSrc from "../../asset/bars-solid.svg";
import CategoryList from "./category.list";
import { useRouter } from "next/router";
import slugify from "slugify";
import {
  getAllRecipes,
  getAllRecipesWithAllData,
} from "../../helpers/api-util";
import dynamic from "next/dynamic";
import RecipesSearch from "./recipes-search";
import Autocomplete, { MyCombobox } from "../search/Autocomplete";
import { SearchContact } from "../layout/layout";
const Pagination = dynamic(() => import("./pagination"));

function RecipeList(props) {
  const [selectedOption, setSelectedOption] = useState("");
  const {
    items,
    categories,
    category: preCategory,
    search: preSearch = "",
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const [recipes, setRecipes] = useState(items);

  const [category, setCategory] = useState(preCategory);
  const { search, setSearch } = useContext(SearchContact);

  const { query, push, pathname } = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      push(
        pathname,
        {
          query: {
            category: slugify(category),
            page,
            search,
          },
        },
        { shallow: true },
      );

      const response = await getAllRecipes({ category, page, search });
      setRecipes(response);
    })();
  }, [category, page, search]);

  return (
    <div className="drawer drawer-mobile">
      <div className="drawer-content">
        <div className="grid md:grid-cols-12 px-3 ">
          <div className="hidden md:flex flex-col col-span-2 border-r-2 overflow-auto sticky   border-r-gray-light">
            <div className="py-3 my-4 pb-6 border-b-2 border-b-gray-light">
              <h3 className=" md:text-3xl sm:text-base">Categories</h3>
            </div>
            <CategoryList
              setCategory={(cate) => {
                setCategory(cate);
                setPage(1);
                setSearch("");
              }}
              categories={categories}
            />
          </div>
          <div className="md:col-span-10 pb-5">
            <div className="md:flex pb-3 my-4 md:flex-column justify-between align-middle border-b-2 relative   border-b-gray-light">
              <div className="relative">
                <span className="inline-block md:hidden absolute left-3">
                  <span
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <Image alt={"menu"} src={ImageSrc} width={20} height={20} />
                  </span>
                </span>
                <Drawer
                  categories={categories}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                >
                  <article className="relative m-5 w-64 pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
                    <div className="py-1 my-4 pb-6 border-b-2 border-b-gray-light">
                      <h3 className="text-xl ">Categories</h3>
                    </div>
                    <div>
                      <CategoryList
                        setCategory={(cate) => {
                          setCategory(cate);
                          setPage(1);
                          setIsOpen(false);
                          setSearch("");
                        }}
                        categories={categories}
                      />
                    </div>
                  </article>
                </Drawer>
                <p className="relative left-10 w-4/5">
                  <a
                    className="hover:underline cursor-pointer"
                    onClick={() => setCategory("")}
                  >
                    Recipes
                  </a>
                  {category ? ` / ${category} ` : ""}
                </p>
                <h3 className=" md:text-3xl sm:text-base ml-4">
                  {category || "All Recipes"}
                </h3>
              </div>

              <Pagination total={recipes.total} page={page} setPage={setPage} />
            </div>

            <ul className={`grid md:grid-cols-3 xl:grid-cols-4 gap-3 p-3`}>
              {recipes.limitedRecipes.map((recipe) => (
                <RecipeItem
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  instructions={recipe.instructions}
                  ingredients={recipe.ingredients}
                  image={recipe.image}
                  isFeatured={recipe.isFeatured}
                  description={recipe.description}
                />
              ))}
            </ul>
            <Pagination total={recipes.total} page={page} setPage={setPage} />
          </div>
        </div>
      </div>
    </div>
  );
}

console.log("items");
export default RecipeList;
