import React, { useState } from 'react';

const Form = () => {
    // State to hold user inputs
    const [noun, setNoun] = useState('');
    const [noun2, setNoun2] = useState('');
    const [adjective, setAdjective] = useState('');
    const [color, setColor] = useState('');
    const [sentence, setSentence] = useState(''); // State to hold the generated sentence

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Create the sentence using the inputs
        const generatedSentence = `The ${adjective} ${color} ${noun} jumped over ${noun2}.`;
        setSentence(generatedSentence); // Set the generated sentence
        // Clear inputs if desired
        setNoun('');
        setNoun2('');
        setAdjective('');
        setColor('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='noun'>Noun</label>
                <input id='noun' name='noun' type='text' value={noun} onChange={(e) => setNoun(e.target.value)} />
                
                <label htmlFor='noun-2'>Noun 2</label>
                <input id='noun-2' name='noun-2' type='text' value={noun2} onChange={(e) => setNoun2(e.target.value)} />
                
                <label htmlFor='adjective'>Adjective</label>
                <input id='adjective' name='adjective' type='text' value={adjective} onChange={(e) => setAdjective(e.target.value)} />
                
                <label htmlFor='color'>Color</label>
                <input id='color' name='color' type='text' value={color} onChange={(e) => setColor(e.target.value)} />
                
                <button type="submit">Generate Mad Lib</button>
            </form>
            
            {/* Display the generated sentence */}
            {sentence && <h2>{sentence}</h2>}
        </div>
    );
};

export default Form;






