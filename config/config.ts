export const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || "4000",
  //   jwtSecretKey: process.env.JWT_SECRET || "your_secret_key",
  mongoUri:
    process.env.MONGODB_URI ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/MERNG_Ecomm_backend",
};
