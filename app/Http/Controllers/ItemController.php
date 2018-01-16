<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;
use JWTAuth;

class ItemController extends Controller
{
    public function AllItems(){
    	$items = Item::all();
    	if (!$items->count()) {
    		return response()->json([
    			'Message' => 'No Items Found'
    		],401);
    	}
    	return response()->json([
    			'item' => $items
    	],200);
    }

    public function store(Request $request){
        $user = JWTAuth::parseToken()->authenticate();
        if ($user == null) {
           return response()->json([
                'Message' => 'no token provided'
            ],401);  
        }     


        $Image_Name = $request->file('image')->getClientOriginalName();
        $Image =  $request->file('image')->storeAs('public/Itemimages',$Image_Name);

        $item = new Item();
        $item->name = $request->get('name');
        $item->desc = $request->get('desc');
        $item->price = $request->get('price');
        $item->image = $Image_Name ;
        if (!$item->save()) {
            return response()->json([
                'Message' => 'item can not be saved'
            ],401);
        }
        return response()->json([
                'item' => $item
        ],200);   
    }
    
    
    public function destroy($id){
        $user = JWTAuth::parseToken()->authenticate();
        if ($user == null) {
           return response()->json([
                'Message' => 'no token provided'
            ],404);
           
        }
        $item = Item::find($id);
        if (!$item) {
            return response()->json([
                'Message' => 'item not found'
            ],404);
        }

        if (!$item->delete()) {
            return response()->json([
                'Message' => 'item can not be deleted'
            ],401);
        }

        return response()->json([
                'Message' => 'item deleted successfully'
        ],201);
    }

    public function update($id,Request $request)
    {
        $user = JWTAuth::parseToken()->authenticate();
        if ($user == null) {
           return response()->json([
                'Message' => 'no token provided'
            ],404);
        }
        $item = Item::find($id);
        $item->name = $request->get('name');
        $item->desc = $request->get('desc');
        $item->price = $request->get('price');
       
        if (!$item->save()) {
            return response()->json([
                'Message' => 'This item Can Not be updated',
                'item_information' => $item->toArray()
            ],409);
        }

        return response()->json([
            'Message' => 'This item updated successfully congrats',
            'item_information' => $item->toArray()
        ],200); 






    }
}
