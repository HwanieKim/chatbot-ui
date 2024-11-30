// import React, { useState } from 'react';

// const PromptWithDropdown = ({ onSubmit }) => {
//     const [selectedTone, setSelectedTone] = useState('');

//     const tones = ['Friendly', 'Formal', 'Casual', 'Excited', 'Professional'];

//     const handleDropdownChange = (event) => {
//         setSelectedTone(event.target.value);
//     };

//     const handleSubmit = () => {
//         const prompt = `Write a message in a ${selectedTone} tone.`;
//         onSubmit(prompt);
//     };

//     return (
//         <div>
//             <p>Fixed Prompt: "Write a message in a ... tone."</p>
//             <select onChange={handleDropdownChange} value={selectedTone}>
//                 <option value="">Select a tone</option>
//                 {tones.map((tone, index) => (
//                     <option key={index} value={tone}>{tone}</option>
//                 ))}
//             </select>
//             <button onClick={handleSubmit} disabled={!selectedTone}>
//                 Submit
//             </button>
//         </div>
//     );
// };

// export default PromptWithDropdown;
import { useTranslation } from "react-i18next"
import React, { FC } from "react"
import { PromptGenericInputProps } from "./prompt-generic-props"

export interface PromptDropDownInputProps extends PromptGenericInputProps {
  className?: string
  placeholder?: string
  options: string[] // Lista di opzioni per il dropdown
  onValueChange: (value: string) => void // Funzione per gestire il cambiamento di valore
  value: string // Il valore attuale selezionato
}

export const PromptDropDownInput: FC<PromptDropDownInputProps> = ({
  className,
  placeholder,
  onValueChange,
  value,
  options
}) => {
  const { t } = useTranslation()

  return (
    <div className={className}>
      <select
        value={value}
        onChange={e => onValueChange(e.target.value)}
        className="ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring text-md flex w-full rounded-md border-none bg-transparent px-4 py-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      >
        <option value="" disabled>
          {placeholder || t("Select an option")}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

