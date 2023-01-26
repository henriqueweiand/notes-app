import { createContext } from "react";

export interface Document {
  id: number;
  title: string;
  description: string;
}

export interface AddDocument extends Omit<Document, "id"> {}

export interface DocumentsContextData {
  documents: Document[];
  editDocument: (document: Document) => void;
  addDocument: (document: AddDocument) => void;
  getDocument: (id: number | string) => Document | null;
}

export const DocumentsContext = createContext<DocumentsContextData>(
  {} as DocumentsContextData
);
