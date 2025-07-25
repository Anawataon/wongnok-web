import RecipeForm from '@/components/RecipeForm';

export default function PageCreateRecipe() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Create New Recipe</h1>
            <RecipeForm />
        </div>
    );
}
