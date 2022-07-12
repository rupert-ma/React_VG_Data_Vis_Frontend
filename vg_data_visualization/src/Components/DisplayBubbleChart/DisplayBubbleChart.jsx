import React, { useState } from "react";
import { Chart } from "react-google-charts";

const DisplayBubbleChart = ({videoGames}) => {
    function generateDataForChart(){
        let northAmericaSales = videoGames.reduce((accumulator, curr) => {
            return accumulator + curr.northamericasales;
        }, 0)
        console.log(northAmericaSales)

        let europeSales = videoGames.reduce((accumulator, curr) => {
            return accumulator + curr.europesales;
        }, 0)
        console.log(europeSales)

        let japanSales = videoGames.reduce((accumulator, curr) => {
            return accumulator + curr.japansales;
        }, 0)
        console.log(japanSales)

        let otherSales = videoGames.reduce((accumulator, curr) => {
            return accumulator + curr.othersales;
        }, 0)
        console.log(otherSales)

        let globalSales = videoGames.reduce((accumulator, curr) => {
            return accumulator + curr.globalsales;
        }, 0)
        console.log(globalSales)


        const data = [
            ["Region", "Sales", { role: "style" }],
            ["North America", northAmericaSales, "#b87333"], // RGB value
            ["Europe", europeSales, "silver"], // English color name
            ["Japan", japanSales, "gold"],
            ["Other", otherSales, "color: #e5e4e2"], // CSS-style declaration
            ["Global", globalSales, "color: red"], // CSS-style declaration
        ];

        return data;
    }


    return (
        <div>
            <h4>Sales by Region</h4>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={generateDataForChart()}
            />
        </div>
    );
};

export default DisplayBubbleChart;
