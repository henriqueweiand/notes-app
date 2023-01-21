import React, { ReactNode, useEffect, useState } from "react";
import { AddDocument, Document, DocumentsContext } from "../contexts/Documents";

interface DocumentProviderProps {
  children: ReactNode;
}

export const DocumentProvider = ({ children }: DocumentProviderProps): JSX.Element => {
  const [documents, setDocument] = useState<Document[]>([
    {
      id: 1,
      title: 'test test test test test test test',
      description: 'description 1',
    },
    {
      id: 2,
      title: 'test2',
      description: 'description 2',
    }
  ]);

  function getDocuments() {
    return documents
  }

  function getDocument(id: number | string) {
    const document = documents.find(document => document.id == id);

    return document || null
  }

  function addDocument(newDocument: AddDocument) {
    setDocument((state) => [
      {
        id: state.length + 1,
        ...newDocument
      },
      ...state,
    ])
  }

  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <DocumentsContext.Provider value={{ addDocument, documents, getDocument }}>{children}</DocumentsContext.Provider>
  );
};
