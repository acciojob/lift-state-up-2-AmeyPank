import React, { useState } from 'react';

const Parent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>
            <Child inputValue={inputValue} onInputChange={handleInputChange} />

        </div>
    );
};

const Child = ({ inputValue, onInputChange }) => {
    return (
        <div className="child">
            <h1>Child Component</h1>
            <input
                type="text"
                value={inputValue}
                onChange={onInputChange}
            />
        </div>
    );
};

export default Parent;
