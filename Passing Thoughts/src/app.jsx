import React from 'react';
import {useState, useEffect} from 'react';
import ThoughtForm from './addThoughtForm.jsx';
import Thought from './thought.jsx';


function App() {
    const [thoughts, setThoughts] = useState([]);

    const addThought = (text) => {
        const newThought = {
            id: Date.now(),
            text,
            expiresAt: Date.now() + 15000,
        };
        setThoughts((prevThoughts) => [...prevThoughts, newThought]);
        
    };

    const removeThought = (id) => {
        setThoughts((prevThoughts) => prevThoughts.filter((thought) => thought.id !== id));
    }

    return ( 
        <main>
            <h1>Passing Thoughts</h1>
            <ThoughtForm 
                addThought={addThought}
            />
            <ul>
                {thoughts.map((thought) => (
                    <li key={thought.id}>
                        <Thought
                            thought={thought}
                            removeThought={removeThought}
                        />
                    </li>
                ))}
            </ul>
        </main>
    );

}

export default App;