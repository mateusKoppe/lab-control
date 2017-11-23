<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    public function getLaboratory()
    {
        return Laboratory::find($this->laboratory);
    }

    protected $fillable = [
        'name', 'laboratory', 'status', 'description', 'place',
    ];
}
