import { Recipe } from "@/models/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <div className="flex justify-center items-center pb-4">
            <div className="border p-4 w-80 rounded shadow flex flex-col items-center">
                <img src={recipe.imageUrl} alt={recipe.name} className="w-48 h-48 object-cover mb-4 rounded" />
                <h2 className="text-lg font-bold">{recipe.name}</h2>
                <p className="text-sm">{recipe.description}</p>
            </div>
        </div>
    );
}
