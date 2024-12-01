import { FC, useState } from "react"
import { ChatInputBox } from "../../ui/chat-input-box"
import { PromptGenericInputProps } from "./prompt-generic-props"

export interface PromptBlockInputProps extends PromptGenericInputProps {
  textareaRef?: React.RefObject<HTMLTextAreaElement>
  className?: string
  placeholder?: string

  minRows?: number
  maxRows?: number
  onKeyDown?: (event: React.KeyboardEvent) => void
  onPaste?: (event: React.ClipboardEvent) => void
  onCompositionStart?: (event: React.CompositionEvent) => void
  onCompositionEnd?: (event: React.CompositionEvent) => void
}

export const PromptBlockInput: FC<PromptBlockInputProps> = ({
  onValueChange,
  textareaRef,
  className,
  value,
  onKeyDown = () => {},
  onPaste = () => {},
  onCompositionStart = () => {},
  onCompositionEnd = () => {}
  
}) => {
  const [selectedValue, setSelectedValue] = useState("")

  const handleTextareaClick = (value: string) => {
    setSelectedValue(selectedValue)
    onValueChange(selectedValue)
  }

  return (
    <div className="flex flex-row gap-4">
      <ChatInputBox
        textareaRef={textareaRef}
        value={value}
        className="cursor-pointer"
        onClick={() => handleTextareaClick("Testo del primo textarea")}
      />
      <ChatInputBox
        value={value}
        textareaRef={textareaRef}
        className="cursor-pointer"
        onClick={() => handleTextareaClick("Testo del secondo textarea")}
      />

      <div className="mt-4 p-4 border rounded-md">
        <h4 className="font-bold">Value del textarea selezionato:</h4>
        <p>{selectedValue || "Nessun textarea selezionato"}</p>
      </div>
    </div>
  )
}


