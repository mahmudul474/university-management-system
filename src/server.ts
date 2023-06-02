import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log("listening on port", config.port);
    });

    console.log("database connection established successfully ");
  } catch (e) {
    console.log("feild to db connect ", e);
  }
}

main().catch(err => console.log(err));
