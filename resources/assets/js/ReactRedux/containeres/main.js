import React, { Component } from 'react';
import * as AllItemActions from '../actions/ItemActions';
import { connect } from 'react-redux';
import {Item} from'../components/items';
import {Home} from '../components/home';
import {About} from '../components/about';
import { BrowserRouter as Router , Route ,Link } from 'react-router-dom';


class Main extends Component{
	constructor(props){
		super(props);
		//load data from api before render view
		props.Get_Api_Data();
	}
	render(){
		return(
			<div >
				
			<Router>
			    <div>
			      <ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/about">About</Link></li>
			      </ul>

			      <hr/>

			      <Route exact path="/" component={Home}/>
			      <Route path="/about" component={About}/>
			    </div>
			  </Router>








				<h1 >Main Component</h1>
				<Item itemdata={this.props.item.data.item} searchvalue={this.props.item.search}/>
			</div>
		);
	}
}

const mapStateToProps  = (state)=>{
    return {
       item: state.ItemReducer
    }
};

export default connect(mapStateToProps,AllItemActions)(Main);
