import BookDetails from "@/components/BookDetails"
import PageHeader from "@/components/PageHeader"
import Error from "next/error"
import { useRouter } from "next/router"
import useSWR from "swr"

export default function Work() {
  const router = useRouter()
  const { workid } = router.query

  const { data, error, isLoading } = useSWR(`https://openlibrary.org/works/${workid}.json`)

  if (isLoading) return null;
  if (error) return <Error statusCode={404} />
  return (<>
    <PageHeader text={data?.title} />
    <BookDetails book={data} workId={ workid } />
  </>)
}