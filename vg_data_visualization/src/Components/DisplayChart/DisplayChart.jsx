import React, { useState } from "react";
import { Chart } from "react-google-charts";

const DisplayChart = ({ videoGames }) => {
    // const newData = videoGames.map((element) => {
    //     const container = [element.platform, element.globalsales];
    //      return container
    // });

    function generateDataForChart() {
        let filteredGames = videoGames.filter((game) => game.year > 2013);
        console.log("filtered games", filteredGames);

        let platforms = filteredGames.map((game) => {
            return game.platform;
        });
        console.log("platforms", platforms);

        // let platformsAndSales = platforms.map((platform, index) => [
        //     platform,
        //     allGamesSalesByPlatform[index],
        // ]);
        // console.log("platformsandsales", platformsAndSales);

        let distinctPlatforms = [...new Set(platforms)];
        console.log("distinct platforms", distinctPlatforms);

        let platformArrays = distinctPlatforms.map((platform) => {
            //// loop through allgamesforplatform and sum each games global sales
            ////  is it a filter within a filter? i want to add every platforms global sales together and store them at the appropriate arrays location in
            //// once summed  put sum into array
            
            const allGamesSalesByPlatform = filteredGames.filter(gameGlobalSales => (gameGlobalSales.platform == platform)).reduce((accumulator, curr) => {
                                return (accumulator + curr.globalsales);
                            },0);

            console.log("allGamesSalesByPlatform", allGamesSalesByPlatform);

            return [platform, allGamesSalesByPlatform];
        });
        console.log("platform arrays", platformArrays);

        const data = [["Platform", "Total Sales"], ...platformArrays];

        return data;
    }

    // let item = ["Console", "Total Sales"]
    // newData.splice(0, 0, item)
    // console.log(newData)

    // const data = [
    //     ["Platform", "Total Sales"],
    //     ["Copper", 8.94],
    //     ["Silver", 10.49],
    //     ["Gold", 19.3],
    //     ["Platinum", 21.45],
    //  ];

    return (
        <div>
            <h3> Videogames Sold By Console </h3>
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
