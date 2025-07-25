export interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredient: string;
    instruction: string;
    imageUrl: string;
}

export interface CreateRecipeRequest {
    name: string;
    description: string;
    ingredient: string;
    instruction: string;
    imageUrl: string;
    cookingDurationID: number;
    difficultyID: number;
}
