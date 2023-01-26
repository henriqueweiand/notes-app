import { useEffect, useState } from "react";
import { useDocuments } from "@/hooks/Document";
import { useRouter } from "next/router";

import { Document as DocumentType } from "@/contexts/Documents";
import Button from "@/components/button";
import Layout from "@/components/layout";
import Input from "@/components/input";

export default function Document() {
  const { query: { id } } = useRouter()
  const { editDocument, getDocument } = useDocuments()
  const [document, setDocument] = useState<DocumentType | null>();

  useEffect(() => {
    if (!!id) {
      const document = getDocument(String(id));

      if (document) {
        setDocument(document);
      }
    }
  }, [id])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setDocument({
      id: document!.id,
      title: name == 'title' ? value : document!.title,
      description: name == 'description' ? value : document!.description,
    })
  }

  return (
    <Layout>
      {
        !!document ? (
          <>
            <Input type="text" name="title" value={document?.title} onChange={onChange} />
            <Input as="textarea" rows="10" type="text" name="description" value={document?.description} onChange={onChange} />

            <Button role="button" onClick={() => editDocument(document)}>Edit</Button>
          </>
        ) : (
          <>Select one document</>
        )
      }
    </Layout>
  )
}
