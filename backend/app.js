const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors")

const dotenv = require("dotenv")
dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
  origin: "http://localhost:3000",
  credentials:true, 
})
);
app.use("/", express.static("uploads"))
app.use(bodyParser.urlencoded({extended : true,limits : "50mb"}));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
};

// import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const payment = require("./controller/payment");
const order = require("./controller/order");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");



app.use("/api/user", user);
app.use("/api/shop", shop);
app.use("/api/payment", payment);
app.use("/api/order", order);
app.use("/api/product", product);
app.use("/api/event", event);
app.use("/api/coupon", coupon);




// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;