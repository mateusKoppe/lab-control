<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Laboratory;
use App\User;
use Illuminate\Support\Facades\Validator;

class LaboratoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Laboratory::all();
        // $user = $request->user();
        // return Laboratory::where('accountable', $user->id)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:85',
            'description' => 'string',
            'accountable' => 'exists:users,id',
        ]);
        if($validator->fails())
            return response($validator->errors(), 417);
        $laboratory = Laboratory::create($request->all());
        $laboratory->accountable = User::find($laboratory->accountable);
        return $laboratory;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Laboratory $laboratory)
    {
        $laboratory->accountable = User::find($laboratory->accountable);
        return $laboratory;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Laboratory $laboratory)
    {
        $user = $request->user();
        $validator = Validator::make($request->all() ,[
            'name' => 'string|max:85',
            'description' => 'string',
            'accountable' => 'exists:users,id',
        ]);
        if($validator->fails())
            return response($validator->errors(), 417);
        if(!$laboratory->hasPermission($user)){
            return response(['message' => 'Permission denied'], 403);
        }
        $laboratory->update($request->all());
        $laboratory->accountable = $user;
        return $laboratory;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Laboratory $laboratory)
    {
        $user = $request->user();
        if(!$laboratory->hasPermission($user)){
            return response(['message' => 'Permission denied'], 403);
        }
        $laboratory->delete();
        return response(null, 200);
    }
}
