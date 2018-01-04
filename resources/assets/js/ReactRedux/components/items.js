import React,{Component} from 'react';
import Search from '../containeres/item/search';
import List from '../containeres/item/list';

export const Item = (props)=>{
	return(
		<div>
			{
				(props.itemdata.length > 0) ? 
					(
						<div>
							<Search search={props.searchvalue}/>
							<List MyItems={props.itemdata} search={props.searchvalue}/>
						</div>
					):
				<h3>Featching Data</h3>
			}
			
		</div>
		);
}