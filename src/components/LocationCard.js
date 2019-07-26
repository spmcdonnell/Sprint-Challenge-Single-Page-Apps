import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    background-color: whitesmoke;
    padding: 2%;
    width: 47%;
    border-radius: 10px;
    margin-bottom: 15px;
`;

export default function LocationCard({ location }) {
    const { name, type, dimension, residents } = location;
    return (
        <CardDiv>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
            <p>{residents.length} residents</p>
        </CardDiv>
    );
}
