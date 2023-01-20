import { useState } from "react";
import { Container } from "../styles/pages/home"

interface TopicsProps {
  id: number,
  title: string;
}

const topics: TopicsProps[] = [
  {
    id: 1,
    title: 'test',
  },
  {
    id: 2,
    title: 'test2',
  }
]

export default function Home() {
  const [topic, setTopic] = useState(topics[0]);

  return (
    <Container data-testid="home-container">
      <div>
        {topics.map(topic => <div onClick={() => setTopic(topic)} key={topic.id}>{topic.title}</div>)}
      </div>

      <div>
        {topic.title}
      </div>
    </Container>
  )
}
