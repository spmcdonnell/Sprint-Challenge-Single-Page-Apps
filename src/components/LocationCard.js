import React from 'react';

export default function LocationCard({ location }) {
    const { name, type, dimension, residents } = location;
    return (
        <div>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
        </div>
    );
}
