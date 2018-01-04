import React, { Component } from 'react';
import * as AllItemActions from '../actions/ItemActions';
import { connect } from 'react-redux';
import {Item} from'../components/items';


class Main extends Component{
	constructor(props){
		super(props);
		//load data from api before render view
		props.Get_Api_Data();
	}
	render(){
		return(
			<div >
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
