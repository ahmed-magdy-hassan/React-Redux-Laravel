import React,{Component} from 'react';
import { connect } from 'react-redux';

import {search_for_item} from '../../actions/ItemActions';

class Search extends Component{
	HandleSearch(event){
		this.props.search_for_item(event.target.value);
	}
	render(){
		return(

			<div className="row">
				<div className="SearchItem col-md-10 col-md-offset-1">
					<h3>Search Component</h3>
					<div className="form-group">
						<label htmlFor="itemname">Item Name :</label>
							<input 	type="text" 
									id="itemname" 
									className="form-control" 
									value={this.props.item.search}
									onChange={(event)=>this.HandleSearch(event)}
							/>
						</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps  = (state)=>{
    return {
       item: state.ItemReducer
    }
};

const mapDispachToProps = (dispatch) => {
    return {
 		 search_for_item: (search) => {
 		 	dispatch (search_for_item(search));
        },
    };
}
export default connect(mapStateToProps,mapDispachToProps)(Search);
