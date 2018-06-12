# MockService
It is often the case you need to try out the RESTful API when you are coding a client to consume the service.  However, it is not uncommon that you are working with a third party or other team but their RESTful service is not ready for you to consume, either in the case it is not fully ready or your credential or environment is not yet configured.
This MockService is to serve the purpose of making up a service provider and allows you to call this service with the request parameters/headers, and send you back with pre-configured content, which stored in the json file.

## Build
cd [Project Folder]

npm install

## Run
cd [Project Folder]

node index.js

OR

nodemon index.js

## How it works
drop a file with extension .json inside [Project Folder]/resource
for example, [Project Folder]/resource/verify.json
after the service started in local, it is going to service with the url http://localhost:8200/mockService/verify
or the url http://localhost:8200/ReadFile?id=verify
it will accept GET or POST
the service log will show request url, headers, parameters, payload
