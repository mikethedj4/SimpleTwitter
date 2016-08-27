nodeTwitter
=============

A simple twitter clone for testing new technologies like AngularJS, NodeJS and MongoDB.


Preview
============

[![image host](http://4.t.imgbox.com/QkPtEs7K.jpg)](http://i.imgbox.com/QkPtEs7K.png) [![image host](http://8.t.imgbox.com/V4bl5W5j.jpg)](http://i.imgbox.com/V4bl5W5j.png) [![image host](http://0.t.imgbox.com/5aOFzmgc.jpg)](http://i.imgbox.com/5aOFzmgc.png)

Installation
============

The following guid shows which software you need to run the project and what you have to do after installing the software.

For the client
--------------

There is nothing to do. Just point your webserver to the client directory and open the location in your browser.


For the server
--------------

### Software you need

* NodeJS
* NPM
* MongoDB

### Installing the dependencies

Just run within the `server` directory the command `npm install`.


Running
=======

To run the server just go to the server directory and run `bin/server` to start the server. If you like to start the sever in development mode just run `NODE_ENV=development bin/server`.

You can also run this command from the project root directory: `npm start`.


Deployment
==========

To deploy the project to appfog just follow the install instructions [here](https://docs.appfog.com/getting-started/af-cli). The project automaticly listen to the enviroment vars set by appfog.


Testing
=======

A test instance of this project is deployed on this URL: [simpletwitter.aws.af.cm](http://simpletwitter.aws.af.cm) (Hosted on a free plan at [appfog](https://www.appfog.com/))
