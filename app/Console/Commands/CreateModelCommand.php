<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class CreateModelCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info($this->argument('name'));
        $name = $this->argument('name');
        Artisan::call("make:model ".ucfirst($name).' -c -m');
        $this->info("created model controller and migration");

        Artisan::call("make:transformer ".ucfirst($name.'Transformer'));
        $this->info("created transformer");

        Artisan::call("make:request ".ucfirst($name.'Request'));
        $this->info("created request");

        Artisan::call("make:policy ".ucfirst($name.'Policy'));
        $this->info("created policy");
    }
}
