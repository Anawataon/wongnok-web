import axios from 'axios';
import { Recipe, CreateRecipeRequest } from '@/models/recipe';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getRecipes = async (): Promise<Recipe[]> => {
    const res = await api.get('/recipes');
    return res.data.result;
};

export const createRecipe = async (data: CreateRecipeRequest): Promise<Recipe> => {
    const res = await api.post('/recipes', data);
    return res.data.result;
};
