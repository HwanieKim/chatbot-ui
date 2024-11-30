import { cn } from "@/lib/utils"
import { FC } from "react"
import ReactTextareaAutosize from "react-textarea-autosize"

interface ChatInputBoxProps {
  value: string
  textareaRef?: React.RefObject<HTMLTextAreaElement>
  className?: string
  minRows?: number
  maxRows?: number
  maxLength?: number
  onKeyDown?: (event: React.KeyboardEvent) => void
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void
  onCompositionStart?: (event: React.CompositionEvent) => void
  onCompositionEnd?: (event: React.CompositionEvent) => void
}

export const ChatInputBox: FC<ChatInputBoxProps> = ({
  value,
  textareaRef,
  className,
  minRows = 1,
  maxRows = 6,
  maxLength,
  onKeyDown = () => {},
  onClick = () => {},
  onCompositionStart = () => {},
  onCompositionEnd = () => {}
}) => {
  return (
    <ReactTextareaAutosize
      ref={textareaRef}
      className={cn(
        "bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full resize-none rounded-md border-2 px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      minRows={minRows}
      maxRows={minRows > maxRows ? minRows : maxRows}
      readOnly={true}
      value={value}
      maxLength={maxLength}
      onKeyDown={onKeyDown}
      onClick={onClick}
      onCompositionStart={onCompositionStart}
      onCompositionEnd={onCompositionEnd}
    />
  )
}
