<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Providers\BoardService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(BoardService::class,function($app){
            return new BoardService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }


}
