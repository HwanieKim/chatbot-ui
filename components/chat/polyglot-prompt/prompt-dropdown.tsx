import React, { useState } from 'react';

const PromptWithDropdown = ({ onSubmit }) => {
    const [selectedTone, setSelectedTone] = useState('');

    const tones = ['Friendly', 'Formal', 'Casual', 'Excited', 'Professional'];

    const handleDropdownChange = (event) => {
        setSelectedTone(event.target.value);
    };

    const handleSubmit = () => {
        const prompt = `Write a message in a ${selectedTone} tone.`;
        onSubmit(prompt);
    };

    return (
        <div>
            <p>Fixed Prompt: "Write a message in a ... tone."</p>
            <select onChange={handleDropdownChange} value={selectedTone}>
                <option value="">Select a tone</option>
                {tones.map((tone, index) => (
                    <option key={index} value={tone}>{tone}</option>
                ))}
            </select>
            <button onClick={handleSubmit} disabled={!selectedTone}>
                Submit
            </button>
        </div>
    );
};

export default PromptWithDropdown;