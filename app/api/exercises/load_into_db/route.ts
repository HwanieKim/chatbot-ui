import { createExercise, createExercises } from "@/db/exercises"

import { TablesInsert } from "@/supabase/types"
import example_exercises from "@/data/example_exercises/exercises.json"

export async function GET(request: Request) {
    const exercises = example_exercises as TablesInsert<"exercises">[]
    const createdExercises = await createExercises(exercises)
    return new Response(JSON.stringify(createdExercises))


    return new Response()
}