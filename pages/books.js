import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Pagination, Table } from "react-bootstrap";
import useSWR from "swr";

export default function Books() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const router = useRouter();
  
  //Updated code for search

  let queryString = { ...router.query };
  let qParts = [];
  
  Object.entries(queryString).forEach(([key, value]) => {
    qParts.push(`${key}:${value}`);
  });

  if (qParts.length > 0) {
    queryString = qParts.join(" AND ");
  }

  const { data, error } = useSWR(
    `https://openlibrary.org/search.json?q=${queryString}&page=${page}&limit=10`
  );

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const next = () => setPage((prev) => prev + 1);
  const prev = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  if (error) return <div>Failed to Load</div>;
  if (!data) return <div>Loading</div>;

  const totalResults = data.numFound || 0;
  const resultsPerPage = 10;
  const maxPage = Math.ceil(totalResults / resultsPerPage);

  return (
    <>
      <PageHeader
        text="Search Results"
        subtext={Object.entries(router.query).map(([key, value]) => (
          <span key={key}>
            <strong>{key}: </strong> {value}{" "}
          </span>
        ))}
      />

      <Table striped hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Published</th>
          </tr>
        </thead>

        <tbody>
          {pageData.docs?.map((book, i) => (
            <tr key={i} onClick={() => router.push(book.key)}>
              <td>{book.title}</td>
              <td>{book.first_publish_year || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev onClick={prev} disabled={page === 1} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} disabled={page >= maxPage} />
      </Pagination>
    </>
  );
}
