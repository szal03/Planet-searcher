import React from 'react';
import './style/App.css';
import Header from "./Header";
import HeroImg from "./HeroImg";
import SearchInput from "./SearchInput";
import PlanetCard from "./PlanetCard";
import 'bootstrap/dist/css/bootstrap.css';
import PlanetInfoWindow from "./PlanetInfoWindow";

const API = 'https://images-api.nasa.gov/search';


class App extends React.Component {

    state = {
        inputValue: "",
        searchValue: [],
        statusSearch: false,
        failSearchStatus: false,
        searchObject: [],
        showInfoWindow: false,
        showBasicInfo: false,
    }

    handleSearchInput = (e) => {
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleSumbmitValue = () => {
        if (this.state.inputValue === "") {
            return alert("need to write something")
        }
        const query = `${API}?q=${this.state.inputValue}`;
        fetch(query).then(response => {
            if (response.ok) {
                return response
            }
            throw Error(response.status)
        }).then(response => response.json())
            .then(data => {
                if (data.collection.items.length > 0) {
                    this.setState({
                        searchValue: data.collection.items,
                        statusSearch: true,
                    })
                }
                else {
                    this.setState({
                        failSearchStatus: true,
                        statusSearch: true,
                    })
                }
            })
            .catch(error => console.log(error))
    }
    handleBackButton = () => {
        this.setState({
            inputValue: "",
            searchValue: [],
            statusSearch: false,
            failSearchStatus: false,
        })
    }

    handleShowInfo = (id) => {
        const collection = this.state.searchValue;
        const searchObject = collection.filter(elem => elem.data[0].nasa_id === id);
        const showInfoWindow = true;
        this.setState({
            searchObject,
            showInfoWindow: true,
        })
    }

    handleHideInfo = () => {
        this.setState({
            showInfoWindow: false,
        })
    }

    handleChangeTrue = () => {
        this.setState({
            showBasicInfo: true,
        })
    }

    handleChangeFalse = () => {
        this.setState({
            showBasicInfo: false,
        })
    }


    render() {
        const searchActive = this.state.statusSearch;
        const searchStatus = this.state.failSearchStatus;
        const searchObject = this.state.searchObject;
        const showInfoWindow = this.state.showInfoWindow;
        const showBasicInfo = this.state.showBasicInfo;
        return (
            <div className="App">
                <Header statusForSearch={this.state.statusSearch} click={this.handleBackButton} searchStatus={searchStatus} />
                <HeroImg />
                {searchActive ? null : <SearchInput
                    value={this.state.inputValue}
                    change={this.handleSearchInput}
                    submitSearch={this.handleSumbmitValue}
                    show={showBasicInfo}
                    showInfo={this.handleChangeTrue}
                    hideInfo={this.handleChangeFalse} />}
                <div className="contentContainer">
                    <div className="cardsContainer">
                        {searchActive ? <PlanetCard data={this.state.searchValue}
                            name={this.state.inputValue}
                            showInfo={this.handleShowInfo}
                            searchObject={searchObject}
                            showInfoWindow={showInfoWindow}
                            hideInfo={this.handleHideInfo} /> : null}
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
