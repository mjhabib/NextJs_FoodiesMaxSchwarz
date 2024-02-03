"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { MealFormData } from "./meals.types";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string | FormDataEntryValue | null): boolean {
  if (!text) return true;
  const textStr = text as string;
  return !textStr || !textStr.trim();
}

export async function shareMeal(
  previousState: { message: string },
  formData: FormData
) {
  const meal: MealFormData = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image") as File,
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !(meal.creator_email as string).includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
