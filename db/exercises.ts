import { TablesInsert, TablesUpdate } from "@/supabase/types"

import { supabase } from "@/lib/supabase/browser-client"

export const getExerciseById = async (exerciseId: string) => {
  const { data: exercise } = await supabase
    .from("exercises")
    .select("*")
    .eq("id", exerciseId)
    .maybeSingle()

  return exercise
}

export const getExercisesByWorkspaceId = async (workspaceId: string) => {
  const { data: exercises, error } = await supabase
    .from("exercises")
    .select("*")
    .eq("workspace_id", workspaceId)
    .order("created_at", { ascending: false })

  if (!exercises) {
    throw new Error(error.message)
  }

  return exercises
}

export const createExercise = async (exercise: TablesInsert<"exercises">) => {
  const { data: createdExercise, error } = await supabase
    .from("exercises")
    .insert([exercise])
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return createdExercise
}

export const createExercises = async (exercises: TablesInsert<"exercises">[]) => {
  const { data: createdExercises, error } = await supabase
    .from("exercises")
    .insert(exercises)
    .select("*")

  if (error) {
    throw new Error(error.message)
  }

  return createdExercises
}

export const updateExercise = async (
  exerciseId: string,
  exercise: TablesUpdate<"exercises">
) => {
  const { data: updatedExercise, error } = await supabase
    .from("exercises")
    .update(exercise)
    .eq("id", exerciseId)
    .select("*")
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return updatedExercise
}

export const deleteExercise = async (exerciseId: string) => {
  const { error } = await supabase.from("exercises").delete().eq("id", exerciseId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
