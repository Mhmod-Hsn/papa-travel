// axios
import axios from 'axios';

// const domain = "127.0.0.1";

export default axios.create({
    // `baseURL` will be prepended to `url` unless `url` is absolute.
    // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
    // to methods of that instance.
    baseURL: '/api/',

    // `timeout` specifies the number of milliseconds before the request times out.
    // If the request takes longer than `timeout`, the request will be aborted.
    timeout: 30000, // default is `0` (no timeout)

    headers: {'X-Requested-With': 'XMLHttpRequest'},
    // You can add your headers here
});
