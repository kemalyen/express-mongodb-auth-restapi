import Router from "express-promise-router";
import {
  createMovie,
  //deleteMovie,
  getMovie,
  getMovies,
  //updateMovie,
} from "../controllers/movies.controller";
import { requireAuth, requireNotAuth } from "../middlewares/requireAuth";
import { validateSchema } from "../middlewares/validateSchema";
import { createMovieSchema } from "../schemas/movie.schema.ts";

const router = Router();

router.get("/movies", requireNotAuth, getMovies);

router.post(
  "/movies",
  requireAuth,
  validateSchema(createMovieSchema),
  createMovie
);

router.get("/movies/:id", requireAuth, getMovie);

//router.delete("/movies/:id", requireAuth, deleteMovie);

//router.patch("/movies/:id", requireAuth, updateMovie); 

export default router;
