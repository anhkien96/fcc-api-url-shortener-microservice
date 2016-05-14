## FreeCodeCamp API: URL Shortener Microservice
By Kien Nguyen <anhkien96@gmail.com>

### User stories

1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. If I pass an invalid URL that doesn't follow the valid http://example.com format, the JSON response will contain an error instead.
3. When I visit that shortened URL, it will redirect me to my original link.

### Example usage
```
http://fcc-api-url-shortener.herokuapp.com/new/http://foo.com:80
http://fcc-api-url-shortener.herokuapp.com/new/http://google.com
```
### Example output
```
{"original_url":"http://foo.com:80", "short_url":"http://fcc-api-url-shortener.herokuapp.com/r12iHyrM"}
```
### Usage
```
http://fcc-api-url-shortener.herokuapp.com/Sk1nrJBf
```
### Redirect to
```
http://google.com
```
### Live site
[http://fcc-api-url-shortener.herokuapp.com](http://fcc-api-url-shortener.herokuapp.com)
