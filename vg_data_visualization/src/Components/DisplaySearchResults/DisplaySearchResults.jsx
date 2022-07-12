import React, { useState } from "react";

const DisplaySearchResults = ({ searchResult }) => {
    return (
        <div className="d-flex">
            {searchResult.map((videoGame, index) => {
                return (
                    <div key={index}>
                        <div 
                            className="card bg-secondary mb-3"
                            style={{maxwidth: "10em", margin:"5px"}}
                        >
                            <div className="card-header">{videoGame.name}</div>
                            <div className="card-body">
                                <ul >
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
