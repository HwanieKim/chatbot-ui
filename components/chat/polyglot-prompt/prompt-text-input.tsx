import { useTranslation } from "react-i18next"
import { TextareaAutosize } from "../../ui/textarea-autosize"
import React, { FC } from "react"
import { PromptGenericInputProps } from "./prompt-generic-props"

export interface PromptTextInputProps extends PromptGenericInputProps {
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

export const PromptTextInput: FC<PromptTextInputProps> = ({
  textareaRef,
  className,
  placeholder,
  onValueChange,
  minRows,
  maxRows,
  value,
  onKeyDown = () => {},
  onPaste = () => {},
  onCompositionStart = () => {},
  onCompositionEnd = () => {}
}) => {
  const { t } = useTranslation()
  return (
    <TextareaAutosize
      textareaRef={textareaRef}
      className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring text-md flex w-full resize-none rounded-md border-none bg-transparent px-14 py-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      placeholder={t(
        // `Ask anything. Type "@" for assistants, "/" for prompts, "#" for files, and "!" for tools.`
        `Ask anything. Type @  /  #  !`
      )}
      onValueChange={onValueChange}
      value={value}
      minRows={1}
      maxRows={18}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
    />
  )
}
