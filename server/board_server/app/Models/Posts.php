<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table= 'posts';
    protected $fillable= [
        'title',
        'author',
        'context',
        'board_id',
        'created_at'    
    ];
}
