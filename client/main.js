import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/imageList';


// Creating a component
class App extends Component {
  constructor(props) {
		super(props);
		this.state = { images: []}; // initializes the state object
	}

  componentWillMount() {
		// Good location to load data
		// Called one time  before rendering component
		axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
		  .then(response => this.setState({ images: response.data.data }));
	}

	render() {
    return (
      <div>
         <ImageList images={this.state.images}/>
      </div>
    );
  }
};
// rendering the component
Meteor.startup(()=> {
	ReactDOM.render(<App />, document.querySelector('.container'));

});
