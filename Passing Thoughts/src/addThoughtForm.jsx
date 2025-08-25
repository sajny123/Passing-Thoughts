import React from 'react';
import thought from './thought.jsx';
import {useState, useEffect} from 'react';

function ThoughtForm({ addThought }) {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!text) return;
        addThought(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter thought"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Thought</button>
        </form>
    );
}
export default ThoughtForm;
