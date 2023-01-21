import { useDocuments } from "@/hooks/Document";
import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter();
  const { addDocument } = useDocuments()


  return (
    <>
      <button onClick={() => addDocument({
        title: 'new one',
        description: 'the new one'
      })}>Add new one</button>
    </>
  )
}
