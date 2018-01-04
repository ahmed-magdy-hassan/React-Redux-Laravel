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
}
