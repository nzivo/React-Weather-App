import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import ErrorMessage from './components/ErrorMessage';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {lat: null, errorMessage: '', time: new Date().toLocaleTimeString()};
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
    setInterval(() => {
      this.setState({time : new Date().toLocaleTimeString()});    
  }, 1000)
  }

  // Helper function
  renderContent (){
    if (this.state.errorMessage && !this.state.lat) {
      return <div><ErrorMessage message={this.state.errorMessage}/></div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} time = {this.state.time}/>
    }
    return <Spinner message = 'Please accept location'/>
  }

  render(){
    return this.renderContent();
  }
}

ReactDOM.render(<App />,document.getElementById('root'));