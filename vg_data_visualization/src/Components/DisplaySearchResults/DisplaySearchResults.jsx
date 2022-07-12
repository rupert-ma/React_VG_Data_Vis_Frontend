import React, { useState } from "react";

const DisplaySearchResults = ({ searchResult }) => {
    return (
        <div>
            {searchResult.map((videoGame, index) => {
                return (
                    <ul key={index}>
                        <li>Name: {videoGame.name}</li>
                        <li>Genre: {videoGame.genre}</li>
                        <li>Year: {videoGame.year}</li>
                        <li>Global Sales: {videoGame.globalsales}</li>
                    </ul>
                );
            })}
        </div>
    );
};

export default DisplaySearchResults;
