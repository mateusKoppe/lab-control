<?php

namespace App\Http\Controllers;

use App\Tool;
use App\Laboratory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ToolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, Laboratory $laboratory)
    {
        return Tool::where('laboratory', $laboratory->id)->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Laboratory $laboratory)
    {
        $user = $request->user();
        if(!$laboratory->hasPermission($user))
            return response()->json(['message' => 'Permission denied'], 403);
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|min:2|max:64',
            'laboratory' => 'required|integer|exists:laboratories,id',
            'status' => 'string|in:enable,alocated,disable',
            'place' => 'string|max:85',
        ]);
        if($validator->fails())
            return response($validator->errors(), 417);
        $tool = Tool::create($request->all());
        $tool->laboratory = $laboratory;
        return $tool;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, Tool $tool)
    {
        $tool->laboratory = $tool->getLaboratory();
        return $tool;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tool $tool)
    {
        $user = $request->user();
        $laboratory = $tool->getLaboratory();
        if(!$laboratory->hasPermission($user))
            return response()->json(['message' => 'Permission denied'], 403);
        $validator = Validator::make($request->all(), [
            'name' => 'string|min:2|max:64',
            'laboratory' => 'integer|exists:laboratories,id',
            'status' => 'string|in:enable,alocated,disable',
            'place' => 'string|max:85',
        ]);
        if($validator->fails())
            return response($validator->errors(), 417);
        $tool->update($request->all());
        $tool->laboratory = $laboratory;
        return $tool;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Tool $tool)
    {
        $user = $request->user();
        $laboratory = $tool->getLaboratory();
        if(!$laboratory->hasPermission($user))
            return response()->json(['message' => 'Permission denied'], 403);
        $tool->delete();
        return response(null, 200);
    }
}
