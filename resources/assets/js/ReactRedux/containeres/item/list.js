import React,{Component} from 'react';
import { connect } from 'react-redux';
import {search_for_item} from '../../actions/ItemActions';



class List extends Component {
	render(){
		let ItemFilter = this.props.MyItems.filter(
			(link)=> {
				return link.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
			}
		);
		
		return(
			<div className="row">
			
				<div className="ListItem col-md-8 col-md-offset-1">
					<h3>Items</h3>
					{	
							(
								ItemFilter.map( (link,i) => 
									<ul className="list-group col-md-6 col-md-offset-1 " key={i}>
										<li className="list-group-item"> <span className="label label-primary">{link.id}</span></li>
										<li className="list-group-item">Name : {link.name}</li> 
										<li className="list-group-item">desc : {link.desc}</li> 
										<li className="list-group-item">price : <span className="label label-primary">{link.price}</span></li> 

									</ul>  
									
								)
							) 
						}
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

export default connect(mapStateToProps,mapDispachToProps)(List);

