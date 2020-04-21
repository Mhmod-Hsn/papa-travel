<?php

if (!function_exists('download_file'))
{
    function download_file($file, $path)
    {
        $new_name = md5(time() . $file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension();
        $file->move($path, $new_name);
        return $new_name;
    }
}
