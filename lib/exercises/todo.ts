import { ChatInputTypes } from "@/components/chat/polyglot-prompt/input-registry"
import { PromptBlockInput } from "@/components/chat/polyglot-prompt/prompt-block-input"
import { PromptDropDownInput } from "@/components/chat/polyglot-prompt/prompt-dropdown"
import { PromptGenericInputProps } from "@/components/chat/polyglot-prompt/prompt-generic-props"
import { PromptTextInput } from "@/components/chat/polyglot-prompt/prompt-text-input"
import { FC } from "react"
import internal from "stream"

const exercises = [
  //simula db
  {
    name: "exercise 1",
    id: "0",
    description: "mocali",
    steps: [
      {
        inputType: {
          type: "dropdown",
          options: ["opt 1", "opt 2", "opt 3"],
          expectedInput: "input",
          expectedOutput: "opt 2"
        }
      },
      {
        inputType: {
          type: "block",
          value1: "left",
          value2: "right"
        },
        expectedInput: "left",
        expectedOutput: "leftChosen"
      }
    ]
  }
]

export class ExerciseMock {
  static getInputTypeFromExercise(id: string, stepNumber: number): ChatInputTypes {
    const e = exercises.find(e => e.id == id)
    const step = e?.steps[stepNumber]

    if (!step || !step.inputType) {
      return "text" //fallback
    }

    // todo runtime check per step inputType 
    return step?.inputType.type as ChatInputTypes
  }
  static getOptionsFromExercise(id: string, stepNumber: number) {
    const e = exercises.find(e => e.id == id)
    const step = e?.steps[stepNumber]
    return step?.inputType.options
  }
}
