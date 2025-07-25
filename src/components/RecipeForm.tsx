'use client';

import { useState } from 'react';
import { CreateRecipeRequest } from '@/models/recipe';
import { useRouter } from 'next/navigation';
import { createRecipe } from '@/services/recipie-service';

export default function RecipeForm() {
    const router = useRouter();
    const [form, setForm] = useState<CreateRecipeRequest>({
        name: '',
        description: '',
        ingredient: '',
        instruction: '',
        imageUrl: '',
        cookingDurationID: 1,
        difficultyID: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        createRecipe(form).then((data) => {
            console.log('Recipe created:', data);
            router.push('/recipes');
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="ชื่อ" className="border p-2 w-full" />

            <textarea name="description" value={form.description} onChange={handleChange} placeholder="คำอธิบาย" className="border p-2 w-full" />

            <textarea name="ingredient" value={form.ingredient} onChange={handleChange} placeholder="วัตถุดิบ" className="border p-2 w-full" />

            <textarea name="instruction" value={form.instruction} onChange={handleChange} placeholder="วิธีทำ" className="border p-2 w-full" />

            <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="URL รูปภาพ" className="border p-2 w-full" />

            <input name="cookingDurationID" type="number" value={form.cookingDurationID} onChange={handleChange} placeholder="cookingDurationID" className="border p-2 w-full" />

            <input name="difficultyID" type="number" value={form.difficultyID} onChange={handleChange} placeholder="difficultyID" className="border p-2 w-full" />

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Create
            </button>
        </form>
    );
}
