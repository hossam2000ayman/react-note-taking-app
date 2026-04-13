import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import type { Note } from "./App";

type NoteLayoutProps = {
  notes: Note[];
};
export default function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((_note) => _note.id === id);

  if (note == null) return <Navigate to={"/"} replace />;

  // placeholder for child node to render into
  return <Outlet context={note} />;
}

// context api from 'react-router-dom'
export function useNote() {
  return useOutletContext<Note>();
}
