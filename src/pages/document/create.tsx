import { useTopics } from "@/hooks/Topic";
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter();
  const { addTopic } = useTopics()


  return (
    <>
      <button onClick={() => addTopic({
        title: 'new one',
        description: 'the new one'
      })}>Add new one</button>
    </>
  )
}
