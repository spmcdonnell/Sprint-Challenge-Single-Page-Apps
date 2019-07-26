import React from 'react';

import styled from 'styled-components';

const CardDiv = styled.div`
    background-color: whitesmoke;
    padding: 2%;
    width: 30%;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const CharImg = styled.img`
    width: 100%;
`;

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
