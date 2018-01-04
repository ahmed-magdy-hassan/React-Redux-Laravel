<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class ItemController extends Controller
{
    public function AllItems()
    {
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
        $item = new Item();
        $item->name = $request->get('name');
        $item->desc = $request->get('desc');
        $item->price = $request->get('price');
        if (!$item->save()) {
            return response()->json([
                'Message' => 'item can not be saved'
            ],401);
        }
        return response()->json([
                'item' => $item
        ],200);   
    }
}
