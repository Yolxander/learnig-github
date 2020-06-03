import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader'

class App extends React.Component{

    state ={lat:null, errorMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>{this.setState({lat:position.coords.latitude})},
            (err)=>{this.setState({errorMessage:err.message})}
        );
    }
    renderContent(){
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay latitude={this.state.lat}/>
            }
            if(this.state.errorMessage && !this.state.lat){
            return <div>Error:{this.state.errorMessage}</div>
            }
            return <Loader message="Please allow to use your location"/>
    }
    render(){
        return<div>
            {this.renderContent()}
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))