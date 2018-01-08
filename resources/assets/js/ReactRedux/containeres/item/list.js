import React,{Component} from 'react';
import { connect } from 'react-redux';
import {search_for_item , Add_Item , Get_Api_Data ,Delete_Item} from '../../actions/ItemActions';



class List extends Component {

	HandleAddItem(event){
		event.preventDefault();

		let name=this.refs.name.value;
		let description=this.refs.description.value;
		let price=this.refs.price.value;
		var item={
			name:name,
			description:description,
			price:price
		}
		this.props.Add_Item(item);
		//get items from api again
		this.props.GetItems();
		this.refs.name.value = '';
		this.refs.description.value = '';
		this.refs.price.value = 0;
	}
	DeleteItem(item_id){
		this.props.DeleteItem(item_id);
		this.props.GetItems();
	}
	render(){
		let ItemFilter = this.props.MyItems.filter(
			(link)=> {
				return link.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
			}
		);
		
		return(
			<div className="row">
			
				<div className="ListItem col-md-10 col-md-offset-1">
					
					<div className="col-md-10 col-md-offset-1 additems">
						<h3> Add New Item <span className="glyphicon glyphicon-plus" aria-hidden="true"></span></h3>
						<div className="row">
							<form onSubmit={this.HandleAddItem.bind(this)}>
							  <div className="form-group col-md-12">
							    <label htmlFor="name">Name : </label>
							    <input type="text" ref="name" className="form-control" id="name"  placeholder="item name"/>
							  </div>
							  <div className="form-group col-md-12">
							    <label htmlFor="description">Description : </label>
							    <input type="text" ref="description" className="form-control" id="description" placeholder="Description"/>
							  </div>
							  <div className="form-group col-md-12">
							    <label htmlFor="Price">Price : </label>
							    <input type="number" ref="price" className="form-control" id="Price" placeholder="12"/>
							  </div>
							  <div className="form-group col-md-5">
							 	 <button type="submit" className="btn btn-primary">Add Item</button>
							  </div>
							</form>
						</div>
					</div>
					<h3 className="col-md-12 ">Items</h3>
					{	
							(
								ItemFilter.map( (link,i) => 
									<ul className="list-group col-md-6  " key={i}>
										<li className="list-group-item clearfix"> 
											<span className="label label-primary pull-left">{link.id}</span> 
											<button type="button" className="pull-right btn btn-info btn-xs">
												<span className="glyphicon glyphicon-edit " aria-hidden="true"></span>
											</button>
											<button type="button" className="pull-right btn btn-danger btn-xs" onClick={()=>this.DeleteItem(link.id)}>
												<span className="glyphicon glyphicon-remove " aria-hidden="true"></span>
											</button>
 										</li>
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
	        Add_Item:(item)=>{
	        	dispatch (Add_Item(item));
	        },
	        GetItems:()=>{
	        	dispatch (Get_Api_Data());
	        },
	        DeleteItem:(id)=>{
	        	dispatch (Delete_Item(id));
	        }
    };
}

export default connect(mapStateToProps,mapDispachToProps)(List);

