const db_name = "product_manager";
const express = require("express");
const cors = require("cors");
const port = 8000;

require("./config/mongoose.config")(db_name);

const app = express();
app.use(cors());

app.use(express.json());

require("./routes/product.routes")(app);

app.listen(port, () => {
    console.log(`Listening for request on port ${port} to respond to.`);
});
