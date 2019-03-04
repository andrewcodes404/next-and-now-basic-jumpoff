const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    //we are getting the title and strapline from the props given to us in Nav
    // if you were to access the page directly those props would not be there and you would get a 404
    // this prevents a 404 but you will only get a title as that is the only param available
    // in a real life example 'title' would be an id to send to the db and we would pick up the rest of the data that way
    server.get("/dp/:title", (req, res) => {
      console.log(req.params.title, "page - loading from the express server");
      const actualPage = "/dynamicPage";
      const queryParams = { title: req.params.title };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
