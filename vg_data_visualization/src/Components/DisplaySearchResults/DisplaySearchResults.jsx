import React, { useState } from "react";

const DisplaySearchResults = ({ searchResult }) => {
    return (
        <div>
            {searchResult.map((videoGame, index) => {
                return (
                    <div>
                        <div
                            className="card text-white bg-primary mb-3"
                            
                        >
                            <div className="card-header">{videoGame.name}</div>
                            <div className="card-body">
                                <ul key={index}>
                                    {/* <li>Name: {videoGame.name}</li> */}
                                    <li>Genre: {videoGame.genre}</li>
                                    <li>Year: {videoGame.year}</li>
                                    <li>
                                        Global Sales: {videoGame.globalsales}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DisplaySearchResults;
