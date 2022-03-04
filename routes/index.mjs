import indexRouter from "./home/home.mjs";
import auth from "./users/auth.mjs";


export default (app) => {
  app.use(indexRouter);
  app.use("/auth", auth);
};
