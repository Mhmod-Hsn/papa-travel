<?php

namespace App\Transformers;

use App\ContactUs;
use League\Fractal\TransformerAbstract;

class ContactUsTransformer extends TransformerAbstract
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
     * @param ContactUs $contactUs
     * @return array
     */
    public function transform(ContactUs $contactUs)
    {
        return $contactUs->toArray();
    }
}
