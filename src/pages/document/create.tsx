import { useState } from "react";
import { useDocuments } from "@/hooks/Document";

import Button from "@/components/button";
import Layout from "@/components/layout";
import Input from "@/components/input";

export default function Product() {
  const { addDocument } = useDocuments()
  const [document, setDocument] = useState({ title: '', description: '' });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setDocument({
      title: name == 'title' ? value : document.title,
      description: name == 'description' ? value : document.description,
    })
  }

  return (
    <Layout>
      <Input type="text" name="title" value={document.title} onChange={onChange} />
      <Input as="textarea" rows="10" type="text" name="description" value={document.description} onChange={onChange} />

      <Button onClick={() => addDocument(document)}>Add new one</Button>
    </Layout>
  )
}
