<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Laboratory extends Model
{
    public function hasPermission(User $user)
    {
        return $user->id === $this->accountable;
    }

    protected $fillable = [
        'name', 'description', 'accountable',
    ];
}
