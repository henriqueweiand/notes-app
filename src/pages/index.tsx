import Link from "next/link";
import { useRouter } from "next/router";

import ListItem from "@/components/listItem";
import { useDocuments } from "@/hooks/Document";
import { Container, Sidebar, Main } from "../styles/pages/home"

export default function Home() {
  const { query: { id } } = useRouter()
  const { documents, getDocument } = useDocuments();

  const defaulDocument = getDocument(id as any)

  return (
    <Container role="container">
      <Sidebar role="aside">
        <div>
          {documents.map(document => <ListItem {...document} key={document.id} />)}
        </div>
        <Link href={"/document/create"}>
          <button>create</button>
        </Link>
      </Sidebar>

      <Main role="main">
        {defaulDocument && (
          <>
            <div>
              <h1>
                {defaulDocument.title}
              </h1>
              <Link href={"/document"}>
                <button>Edit</button>
              </Link>
            </div>
            <p>
              {defaulDocument.description}
            </p>
          </>
        )}
      </Main>
    </Container>
  )
}
