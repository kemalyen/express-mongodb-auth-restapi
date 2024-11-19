import { z } from "zod";

export const createMovieSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    fullplot: z.string({
      required_error: "fullplot is required",
    }),
    poster: z.string({
      required_error: "Poster is required",
    })
  }),
});

export type createMovieSchema = z.infer<typeof createMovieSchema>["body"];
