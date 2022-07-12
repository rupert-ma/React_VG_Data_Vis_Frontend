import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import DisplayChart from "./Components/DisplayChart/DisplayChart";
import SearchBar from "./Components/SearchBar/SearchBar";
import DisplaySearchResults from "./Components/DisplaySearchResults/DisplaySearchResults";
import DisplayBubbleChart from "./Components/DisplayBubbleChart/DisplayBubbleChart";

function App() {
    const [videoGames, setVideoGames] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        getAllVideoGames();
    }, []);

    // useEffect(() => {
    //     searchForGame(searchResult);
    // }, []);

    const getAllVideoGames = async () => {
        try {
            let response = await axios.get("http://localhost:8080/all");
            console.log(response.data);
            setVideoGames(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    function searchForGame(searchTerm) {
        console.log(searchTerm);
        let filteredGames = videoGames.filter(function (videoGame) {
            if (
                videoGame.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
                return true;
            }
        });
        setSearchResult(filteredGames);
        console.log('searchresult', searchResult);
    }

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <DisplayChart videoGames={videoGames} />
                <DisplayBubbleChart videoGames={videoGames}/>
                <SearchBar searchForGame={searchForGame} />
                <DisplaySearchResults searchResult={searchResult} />
            </main>
        </div>
    );
}

export default App;

// TODO: WireFrame frontend
// TODO: Dont need pages / hooks? / context
// TODO: Searchbarcomponent
// TODO: Question 1: “what is the best video game console to invest in based on the number of game copies sold globally since 2013?
// TODO: ChartComponent with google chart to show all video games sold by console
// TODO: Axios call to backend API
// TODO: Render returned data
// TODO: DisplayList component
// TODO: SearchBar Component
// TODO: ChartComponent to display just searched criteria(video game by console)
