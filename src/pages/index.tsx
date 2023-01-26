import Link from "next/link";
import { useRouter } from "next/router";

import { useDocuments } from "@/hooks/Document";
import Layout from "@/components/layout";
import Button from "@/components/button";

export default function Home({ ...rest }) {
  const { query: { id } } = useRouter()
  const { getDocument } = useDocuments();

  const defaulDocument = getDocument(id as any)

  return (
    <Layout {...rest}>
      {defaulDocument && (
        <>
          <div>
            <h1>
              {defaulDocument.title}
            </h1>
            <Link href={`/document/${defaulDocument.id}`}>
              <Button role="edit" >Edit</Button>
            </Link>
          </div>
          <p>
            {defaulDocument.description}
          </p>
        </>
      )}
    </Layout>
  )
}
