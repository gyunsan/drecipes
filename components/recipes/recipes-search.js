import Autocomplete from "../search/Autocomplete";

function RecipesSearch({ setSearch, search, options, display }) {
  return (
    <div
      className={`${!display ? "w-2/4" : "w-ful"}  ${
        !display ? "hidden md:flex" : "md:hidden mb-10"
      }`}
    >
      <Autocomplete options={options} value={search} onChange={setSearch} />
    </div>
  );
}

export default RecipesSearch;
