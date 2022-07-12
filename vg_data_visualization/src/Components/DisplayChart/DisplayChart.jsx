import React, { useState } from "react";
import { Chart } from "react-google-charts";

const DisplayChart = ({ videoGames }) => {
    function generateDataForChart() {
        let filteredGames = videoGames.filter((game) => game.year > 2013);
        // console.log("filtered games", filteredGames);

        let platforms = filteredGames.map((game) => {
            return game.platform;
        });
        // console.log("platforms", platforms);

        let distinctPlatforms = [...new Set(platforms)];
        // console.log("distinct platforms", distinctPlatforms);

        let platformArrays = distinctPlatforms.map((platform) => {
            //// loop through allgamesforplatform and sum each games global sales
            ////  is it a filter within a filter? i want to add every platforms global sales together and store them at the appropriate arrays location in
            //// once summed  put sum into array

            const allGamesSalesByPlatform = filteredGames
                .filter(
                    (gameGlobalSales) => gameGlobalSales.platform == platform
                )
                .reduce((accumulator, curr) => {
                    return accumulator + curr.globalsales;
                }, 0);

            // console.log("allGamesSalesByPlatform", allGamesSalesByPlatform);

            return [platform, allGamesSalesByPlatform];
        });
        // console.log("platform arrays", platformArrays);

        const data = [["Platform", "Total Sales"], ...platformArrays];

        return data;
    }

    return (
        <div>
            <h4> Videogames Sold By Console </h4>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={generateDataForChart()}
            />
        </div>
    );
};

export default DisplayChart;
