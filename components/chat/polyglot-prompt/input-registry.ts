import { FC } from "react"
import { PromptGenericInputProps } from "./prompt-generic-props"
import { PromptTextInput } from "./prompt-text-input"
import { PromptBlockInput } from "./prompt-block-input"
import { PromptDropDownInput } from "./prompt-dropdown"

export type ChatInputTypes = "block" | "text" | "dropdown"

// const inputRegistry: { [key in ChatInputTypes]: ()=> FC<PromptGenericInputProps> } = {
//   "text": () => PromptTextInput,
//   "block": () => PromptBlockInput,
//   "dropdown": () => PromptDropDownInput
// }
