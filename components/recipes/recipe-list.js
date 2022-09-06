import RecipeItem from "./recipe-item";

function RecipeList(props) {
    const { items } = props;
    return <ul>
        {items.map(event => <RecipeItem />)}
    </ul>
}

export default RecipeList;