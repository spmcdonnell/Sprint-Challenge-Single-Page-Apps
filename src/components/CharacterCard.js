import React from 'react';

import style from './character-card.module.css';

export default function CharacterCard({ character }) {
    const { image, name, species, status, location, origin } = character;
    return (
        <div className={style.characterCard}>
            <img className={style.characterCardImage} src={image} />
            <h2>{name}</h2>
            <p>
                Species: {species}, Status: {status}
            </p>
            <p>Location: {location.name}</p>
            <p>Origin: {origin.name}</p>
        </div>
    );
}
