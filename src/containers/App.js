import React, { Component } from 'react';
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log('constructor');
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));

        console.log('componentDidMount');
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        console.log(event.target.value);
    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
        })

        return !robots.length ?
            <h1>Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <Cardlist robots={filteredRobots} />
                    </Scroll>

                </div>
            );
    }
}

export default App;