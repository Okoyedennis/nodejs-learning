const express = require("express");
const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const bodyParser = require("body-parser");
// const expressHbs = require("express-handlebars")
const path = require("path");


const app = express();


// Template engine for HBS
// app.engine("hbs", expressHbs({layoutDir: "views/layouts/", defaultLayout: "main-layout", extname:"hbs"}))
// app.set("view engine", "hbs");

// Template engine for PUG
app.set("view engine", "pug")
app.set("views", "views")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminData.router)
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, "./", "views", "not-found.html"));
    res.status(404).render("404", { docTitle: "Not Found!" });
})


app.listen(2000);
