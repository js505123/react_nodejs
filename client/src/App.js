import React, { Component } from 'react';
import Sub from './sub/Sub';
import './App.css';


class App extends Component{

    state = {
        datas : ""
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({datas:res}))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/test');
        const body = await response.json();
        return body;
    }

    render(){
        return (
            <div className="App">
                {
                    this.state.datas ? this.state.datas.map(c => {

                    return (

                        <Sub
                            key={c.id}
                            id={c.id}
                            title={c.title}
                            text={c.text}
                        />

                    )
                    }) : ""
                }


            </div>
        );
    }
}

export default App;
