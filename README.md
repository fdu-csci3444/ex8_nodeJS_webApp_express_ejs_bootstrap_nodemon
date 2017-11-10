# ex8_nodeJS_webApp_express_ejs_bootstrap_nodemon
Example project introducing node module express

# Summary of express
+ Express is a minimal and flexible nodeJS web application framework
+ Like all node modules, it is installed via npm
+ There is also a generator module for express, called "express-generator"
+ Express supports below template engines
    - jade: the default. Was forced to change its name to pug
    - ejs
    - hbs: handlebars
    - hjs
    - pug (the continuation of jade)
    - twig
    - vash
    - mustache

# Summary of ejs
+ ejs (Embedded JavaScript) is a client side templating language
+ it is simple and flexible
+ it combines data and a template to produce HTML
+ it is basically HTML with scriptlets sprinkled on it
+ using ejs in this project since it looks most like basic HTML

# Note about jade and pug
+ jade is a template engine that uses spaces in place of tags. So by avoiding end tags, the template code size is reduced.
+ but you can not simply take a html page, you have to convert to use space
+ jade folks were forced to change the name of project in 2015, because somebody else owned the trademark on jade. Since then its name is pug. You can see their releases;
```
npm view jade
npm view pug
```

# ejs VS Code extensions
+ install ".ejs EJS language support for Visual Studio Code ..." by Qassim Farid, which does highlighting
+ NOTE tried to use "ejs Snippets" 0.1.0 by TaodongWu, to get HTML5 snippet support. Seems not to do anything.
+ NOTE tried to install "EJS Eval" by kevgl, it said it does not work with my VSCode version, 1.10.2

# Boostrap summary
+ Bootstrap is an open source toolkit for developing with HTML, CSS and JS.
+ Bootstrap has CSS and JS parts. It is very very popular for UI development.
+ Bootstrap to build responsive, mobile-first web apps without reinventing wheels.
+ Bootstrap includes design templates for typography, forms, buttons, tables, navigation, modals, image carousels, etc. As well as optional JS plugins
+ Bootstrap was started in 2010 in Twitter by Mark Otto, Jacob Thornton and Sarvesh Mishra.
+ It was used to document and share common design patterns and assets in Twitter
+ It was open sourced Aug 2011
+ Bootstrap 2.0 released Jan 2012, introduced 12 column responsive grid layout
+ Bootstrap responsive grid system has 4 classes
    - xs; for phones - screens less than 768px wide
    - sm; for tablets - screens >= 768px wide
    - md; for small laptops - screens >= 992px wide
    - lg; for labtops and desktops - screens >= 1200px wide
+ Bootstrap grid system;
    - .col-xs-*  (like class="col-xs-2")
    - .col-sm-*  (like class="col-sm-2")
    - .col-md-*  (like class="col-md-2")
    - .col-lg-*  (like class="col-lg-2")
+ Bootstrap example. Below will show side by side as 3 equal columns in tablets and above. But will automatically stack up in phones with screen < 768px wide
```html
<div class="container">
 <div class="row"
  <div class="col-sm-4">1st column of 4</div>
  <div class="col-sm-4">2nd column of 4</div>
  <div class="col-sm-4">3rd column of 4</div>
 </div>
</div>
```

# nodemon summary
+ nodemon is a npm package that monitor changes in a nodeJS app and automatically restarts the server
+ nodemon keeps track of changes to app by watching changes to files and automatically restarts the server if needed
+ otherwise(without nodemon) every time we change JS files, we need to restart server manually
+ hence, nodemon is great for development, hence it gets installed as a dev dependency
```
npm install nodemon --save-dev
```
+ then you add a script to package.json to start your app (assuming server.js is starting point of your app) like
```
"scripts": {
    "start_with_nodemon": "nodemon server.js" 
}
```
+ then you start your app (express server) using above script
```
npm run start_with_nodemon
```
+ NOTE to stop app started with nodemon, killing the node process via below will not be sufficient. It does not kill the node server that was started behind the scenes. So instead do "Ctrl + C" to stop nodemon.
```
ps -elf | grep node
kill -9 whateverPIDaboveGives
```
+ to find out PID (the last column) of process listening on a port, let's say 8014
    - -a displays all connections and listening ports
    - -b displays executables involved in creating each connection or listening port
    - -n displays addresses and port numbers in numerical form
    - -o displays owning process PID associated with each connection
```
netstat -abno | grep 8014
or
ps -W | grep node | grep -v node_modules
NOTE doing "kill -9 whateverPIDaboveGives" on PID obtained from above fails
```

# curl summary
+ curl is a command line http client that is part of git bash install
+ curl allows one to easily invoke a web page from command line
```
curl -i "http://localhost:8012"
```

# Setup from clone
+ fork this project
+ clone your fork (in below example using the source repo, use your fork repo instead)
```
mkdir -p /c/fdu/csci3444/projects
cd /c/fdu/csci3444/projects
git clone https://github.com/fdu-csci3444/ex8_nodeJS_webApp_express_ejs_bootstrap_nodemon.git
npm install
```

# Setup from scratch
+ Create project dir, its package.json, install express and add it to package.json as dependency
```
mkdir -p /c/fdu/csci3444/projects/ex8_nodeJS_webApp_express_ejs_bootstrap_nodemon
cd /c/fdu/csci3444/projects/ex8_nodeJS_webApp_express_ejs_bootstrap_nodemon
npm init --yes
npm install express ejs  --save
```
+ to avoid restarting the server every time we change JS code, install nodemon as a dev dependency, which will watch our app and restart the server when needed
```
npm install nodemon --save-dev 
```
+ add proper scripts to package.json to start the apps via nodemon

# Very basic express app
+ See hello_express_basic.js in express_basic dir that creates a web app using express that serves a text/html at root route on port 8012
+ Start it and access it via curl or browser
```
cd express_basic
node hello_express_basic
curl -i "http://localhost:8012"
```
+ stop app via Ctrl + C  or kill it (get its pid and kill it)
```
ps -elf | grep node
kill -9  whateverThePidYouGetFromAboveLine
```
# Basic express using ejs
+ see express_ejs_basic directory. In particular hello_express_usingTemplateEngine_ejs.js and its templates under views dir
+ Start it and access it via curl or browser
```
cd express_ejs_basic
node hello_express_usingTemplateEngine_ejs
curl -i "http://localhost:8013"
```
+ stop app via Ctrl + C  or kill it (get its pid and kill it)
```
ps -elf | grep node
kill -9  whateverThePidYouGetFromAboveLine
```
# NodeJS web app using; express + ejs + bootstrap CSS
+ see express_ejs_bootstrap direcoty. In particular server.js and its page templates under views/pages dir and partials used by its page templates under views/partials.
+ NOTE that using bootstrap CSS loaded from a CDN (Content Delivery Network) for CSS definitions
+ add a script to package.json to start app (note in below example server.js is starting point of this app)
```
"scripts": {
    "start_express_ejs_bootstrap_with_nodemon": "nodemon express_ejs_bootstrap/server.js" 
}
```
+ then you start app (express server) using above script
```
npm run start_express_ejs_bootstrap_with_nodemon
```
+ can start it via node or nodemon or the nodemon script in package.json. NOTE you need to pass full server.js to nodemon.
```
node server
node server.js
nodemon server.js
npm run start_express_ejs_bootstrap_with_nodemon
```
+ connect to it via browser "http://localhost:8014"
+ or connect via curl below. NOTE curl -d passes data, -H specifies content type
```
curl -i "http://localhost:8014"
curl -i "http://localhost:8014/about"
curl -i "http://localhost:8014/records/123"
curl -i  http://localhost:8014/records/123

curl -i "http://localhost:8014/api/help"
curl -i "http://localhost:8014/api/help" -X GET
curl -i "http://localhost:8014/api/help" -X POST -d "param1=value1&param2=value2"
curl -i "http://localhost:8014/api/help" -X PUT  -d "param1=value1&param2=value2"
curl -i "http://localhost:8014/api/help" -X PUT  -d "@dataFile.txt"
curl -i "http://localhost:8014/api/help" -X PUT  -d "@dataFile.json"
curl -i "http://localhost:8014/api/help" -X POST -d '{"param1":"value1", "param2":"value2"}' -H "Content-Type: application/json"
```