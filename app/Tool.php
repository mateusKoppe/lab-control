<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tool extends Model
{
    protected $fillable = [
        'name', 'laboratory', 'status', 'description', 'place',
    ];
}
