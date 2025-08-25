import React from 'react';
import { useState, useEffect } from 'react';

function Thought({ thought, removeThought }) {

    useEffect(() => {
        const timeRemaining = thought.expiresAt - Date.now();

        const timeout = setTimeout(() => {
            removeThought(thought.id);
        }, timeRemaining);

        return () => clearTimeout(timeout);
    }, [thought, removeThought]);

    return (
        <div>
            <h2>{thought.text}</h2>
            <button onClick={() => removeThought(thought.id)}>X</button>
        </div>            
    );
}

export default Thought;