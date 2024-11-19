import { Request, Response } from "express";
import db from "../connection.ts";
import { ObjectId } from "mongodb";
import { NotFound } from "http-errors";


export const getMovies = async (req: Request, res: Response) => {

  let collection = await db.collection("movies");
  let results = await collection.find({})
    .limit(50)
    .toArray();

  res.json(results).status(200);
};
 
export const createMovie = async (
/*   req: Request<unknown, unknown, CreateNoteSchema>,
  res: Response
) => {
  const { title, description } = req.body;

  // find note's author
  const userFound = await User.findById(req.user._id);
  if (!userFound) throw new NotFound("User not found");

  // create a new note
  const newNote = new Note({
    title,
    description,
    author: req.user._id,
  });

  // save note
  const noteSaved = await newNote.save();

  // save user's note to the client
  res.json(noteSaved); */
  res.json([]);
};

export const getMovie = async (req: Request, res: Response) => {

  let collection = await db.collection("movies");
  let query = {_id: ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result)  throw new NotFound("Note not found");
  else res.send(result).status(200);
 
};

export const deleteNote = async (req: Request, res: Response) => {
/*   const deletedNote = await Note.findByIdAndDelete(req.params.id);
  if (!deletedNote) throw new NotFound("Note not found");
  res.sendStatus(204); */
};

export const updateNote = async (req: Request, res: Response) => {
/*   const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(note); */
};
 