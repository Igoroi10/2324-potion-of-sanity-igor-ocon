import { getData } from "./service.mjs";
import Ingredients from "./ingredients.mjs";

const execute = async () => {
    try{
        const data = await getData();
        
        const ingredients = Ingredients.load(data);
        showIngredients(ingredients)
    }
    catch{
        // console.error("Error in reaching DB");
    }
}

const showIngredients = (ingredients) =>{
    ingredients.ingredients.forEach(ingredient => {
        console.log(ingredient.name);
        console.log(ingredient.effects);
        console.log("--------------------------")
        
    });
    console.log("-------------------------------------")
    console.log("-------------------------------------")
}

execute();