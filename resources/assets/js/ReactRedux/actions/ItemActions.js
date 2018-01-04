import axios from "axios";

export function Get_Api_Data(){
	return (dispatch)=>{
		return  axios.get('http://127.0.0.1:8000/api/items/all').then((response) => {
						dispatch(View_Api_Data(response.data.item));
				})
	};
}

export function View_Api_Data(item){
	return dispatch => {
		setTimeout(()=>{
			dispatch({
			type: "ViewItemsData",
			payload:item
			});
		});
	}
}

export function search_for_item(name){
	return {
		type: "SEARCHITEM",
		payload:name
	};
}

