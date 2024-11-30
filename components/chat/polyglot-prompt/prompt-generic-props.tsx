export interface PromptGenericInputProps {
  value: string
  textareaRef?: React.RefObject<HTMLTextAreaElement>
  className?: string
  placeholder?: string
  minRows?: number
  maxRows?: number
  onKeyDown?: (event: React.KeyboardEvent) => void
  onPaste?: (event: React.ClipboardEvent) => void
  onCompositionStart?: (event: React.CompositionEvent) => void
  onCompositionEnd?: (event: React.CompositionEvent) => void
  onValueChange: (value: string) => void
  // extraArgs: [...any]
}
