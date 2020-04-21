<?php
namespace App\Traits;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

trait PaginatesResponsesTrait
{
    /**
     * Create an HTTP response that represents the object with pagination.
     *
     * @return Collection
     */
    public function toPaginatedResponse()
    {
        // Add pagination to the query builder.
        $this->buildPagination();
        // Respond with the transformed paginated date.
        return $this->builder;
    }

    /**
     * Check if the request has a pagination value.
     *
     * @return bool
     */
    protected function hasPagination()
    {
        return request()->has('paginate');
    }

    /**
     * Add paginate to the eloquent query builder.
     *
     * @return void
     */
    protected function buildPagination()
    {
        $this->builder = $this->builder->paginate($this->getPagination(request()));
    }

    /**
     * Get the paginate value.
     *
     * @param $reqest
     * @return int
     */
    protected function getPagination($reqest)
    {
        return request()->input('paginate');
    }
}
