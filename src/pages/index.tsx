import Link from "next/link";
import { useRouter } from "next/router";

import ListItem from "@/components/listItem";
import { useTopics } from "@/hooks/Topic";
import { Container, Sidebar, Main } from "../styles/pages/home"

export default function Home() {
  const { query: { id } } = useRouter()
  const { topics, getTopic } = useTopics();

  const defaulTopic = getTopic(id as any)

  return (
    <Container role="container">
      <Sidebar role="aside">
        <div>
          {topics.map(topic => <ListItem {...topic} key={topic.id} />)}
        </div>
        <Link href={"/document/create"}>
          <button>create</button>
        </Link>
      </Sidebar>

      <Main role="main">
        {defaulTopic && (
          <>
            <div>
              <h1>
                {defaulTopic.title}
              </h1>
              <Link href={"/document"}>
                <button>Edit</button>
              </Link>
            </div>
            <p>
              {defaulTopic.description}
            </p>
          </>
        )}
      </Main>
    </Container>
  )
}
