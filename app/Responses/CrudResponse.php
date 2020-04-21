<?php

namespace App\Responses;

use Illuminate\Http\JsonResponse;

class CrudResponse
{
    /**
     * @param $message
     * @param array $data
     * @param int $status_code
     * @return JsonResponse
     */
    public function respond($message, $data = [], $status_code = 200)
    {
        return response()->json([
            'data' => $data,
            'message' => $message
        ])->setStatusCode($status_code);
    }

    /**
     * @param $message
     * @param array $data
     * @param int $status_code
     * @return JsonResponse
     */
    public function indexRespond($data = [], $message = "Data fetched successfully", $status_code = 200)
    {
        return $this->respond($message, $data, $status_code);
    }

    /**
     * @param $message
     * @param array $data
     * @param int $status_code
     * @return JsonResponse
     */
    public function showRespond($data = [], $message = "Item fetched successfully", $status_code = 200)
    {
        return $this->respond($message, $data, $status_code);
    }

    /**
     * @param $message
     * @param array $data
     * @param int $status_code
     * @return JsonResponse
     */
    public function createRespond($data = [], $message = "Item Created successfully", $status_code = 200)
    {
        return $this->respond($message, $data, $status_code);
    }

    /**
     * @param $message
     * @param array $data
     * @param int $status_code
     * @return JsonResponse
     */
    public function updateRespond($data = [], $message = "Item updated successfully", $status_code = 200)
    {
        return $this->respond($message, $data, $status_code);
    }

    /**
     * @param $message
     * @param array $data
     * @param int $status_code
     * @return JsonResponse
     */
    public function deleteRespond($data = [], $message = "Item deleted successfully", $status_code = 200)
    {
        return $this->respond($message, $data, $status_code);
    }
}
