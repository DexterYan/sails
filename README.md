# A person website

A open website for personal displaying his own achievements. Also to demonstrate how to apply sails.js into application.

# Features

- A enterprise-grade Node.js apps with MVC model structure based on sails.js.
- A responsively designed website with semantic-ui to achieve a easy ui design for customlization.
- Using backbone.js to simplify the website control 
- Using requirejs to optimize the code the website


# Deployment 

- The website has been configured to be deployed in baidu app engine server, after editing your code and run optimization, you can directly deployed it in the BAE server. 
- Local testing is also supported by using port 18080. Before running the application, you should optimize the code first.Then you can use supervisor to run the application without stop.

```
node_modules/requirejs/bin/r.js -o built.js
supervisor -i .tmp,views  app.js
```

# Example

My example website [Dexter Yan website](www.dexteryan.com)
The main website is deployed in BAE, you will jump to [baidu application domin](http://yanshaocong.duapp.com/)

# Developing
- a single web application based on backbone
- More UI is coming soon.
- A newsfeed page to intellgent catch the news from facebook.

