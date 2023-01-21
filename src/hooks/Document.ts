import { useContext } from "react";
import { DocumentsContext, DocumentsContextData } from "../contexts/Documents";

export const useDocuments = (): DocumentsContextData => {
  return useContext(DocumentsContext);
};
