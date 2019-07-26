import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import axios from 'axios';

export default function CharacterList() {
    // TODO: Add useState to track data from useEffect
    const [chars, setChars] = useState([]);

    useEffect(() => {
        // TODO: Add AJAX/API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        axios.get('https://rickandmortyapi.com/api/character/').then(res => {
            console.log(res.data.results);
            setChars(res.data.results);
        });
    }, []);

    return (
        <section className="character-list grid-view">
            {chars.map(char => (
                <CharacterCard key={char.id} character={char} />
            ))}
        </section>
    );
}
