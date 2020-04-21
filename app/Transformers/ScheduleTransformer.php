<?php

namespace App\Transformers;

use App\Schedule;
use League\Fractal\TransformerAbstract;

class ScheduleTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @param Schedule $schedule
     * @return array
     */
    public function transform(Schedule $schedule)
    {
        return $schedule->toArray();
    }
}
