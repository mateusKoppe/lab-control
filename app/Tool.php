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
        'label', 'name', 'laboratory', 'status', 'description', 'place',
    ];
}
