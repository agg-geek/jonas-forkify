import 'regenerator-runtime/runtime';
import { API_URL } from './config';
import { newRequest } from './helpers';

export const state = {
	recipe: {},
	search: {
		query: '',
		results: [],
	},
};

export const loadRecipe = async function (recipeId) {
	try {
		const data = await newRequest(`${API_URL}/${recipeId}`);

		const { recipe } = data.data;
		state.recipe = {
			id: recipe.id,
			title: recipe.title,
			servings: recipe.servings,
			publisher: recipe.publisher,
			ingredients: recipe.ingredients,
			cookingTime: recipe.cooking_time,
			sourceUrl: recipe.source_url,
			imageUrl: recipe.image_url,
		};
	} catch (err) {
		console.error(`You got an error. ${err}`);
		throw err;
	}
};

export const loadSearchResults = async function (query) {
	try {
		const data = await newRequest(`${API_URL}?search=${query}`);
		// console.log(data);

		state.search.query = query;
		state.search.results = data.data.recipes.map(recipe => ({
			id: recipe.id,
			title: recipe.title,
			publisher: recipe.publisher,
			imageUrl: recipe.image_url,
		}));
		console.log(state.search);
	} catch (err) {
		console.error(`You got an error. ${err}`);
		throw err;
	}
};

loadSearchResults('pizza');
