'use client';

import RecipeCard from '@/components/RecipeCard';
import { Recipe } from '@/models/recipe';
import { getRecipes } from '@/services/recipie-service';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageRecipes() {
    const router = useRouter();
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        getRecipes().then((data: Recipe[]) => {
            setRecipes(data);
        });
    }, []);

    const GoToCrateRecipe = () => {
        router.push('/recipes/create');
    };

    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold mb-4">Recipes</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={GoToCrateRecipe}>
                    Create Recipe
                </button>
            </div>

            <div className="grid grid-cols-3 mt-5">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
