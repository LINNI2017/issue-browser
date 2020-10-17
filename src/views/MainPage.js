import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Card, Pagination } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getPageIssue } from "../functions/fetch"

// docs https://docs.github.com/en/free-pro-team@latest/rest/reference/issues

const MainPage = props => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(5)
  const PER_PAGE = 10
  console.log(page)
  console.log(data)

  const getPageItems = (page) => {
    let items = []
    for (let i = 1; i <= size; i++) {
      items.push(
        <Pagination.Item key={`page-${i}`} active={page === i}>
          {i}
        </Pagination.Item>
      )
    }
    return items
  }

  const setPrevPage = (e) => {
    e.preventDefault()
    if (page - 1 < size - 5) {
      setSize(size - 5)
    }
    if (page > 1) {
      setPage(page - 1)
      getPageIssue(setData, page - 1, PER_PAGE)
    }
  }

  const setNextPage = (e) => {
    e.preventDefault()
    if (page + 1 > size) {
      setSize(size + 5)
    }
    setPage(page + 1)
    getPageIssue(setData, page + 1, PER_PAGE)
  }

  useEffect(() => {
    if (data.length === 0) {
      getPageIssue(setData, page, PER_PAGE)
    }
  }, [data, page])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Github Issue Browser</h1>
        <Pagination size="md">
          <Pagination.Prev onClick={(e)=>setPrevPage(e)}/>
          {getPageItems(page)}
          <Pagination.Next onClick={(e)=>setNextPage(e)}/>
        </Pagination>
        {
          data && data.map((info, idx) => {
            return (
              <Card key={`issue-${info.number}`}>
                <Card.Body>
                  <h2>
                    <span style={{ marginRight: "1rem" }}>
                      #{info.number}
                    </span>
                    <Link
                      to={`/issue/${idx+1}`}
                      style={{ marginRight: "1rem" }}
                    >
                      {info.title}
                    </Link>
                    <Button>{info.state}</Button>
                  </h2>
                </Card.Body>
              </Card>
            )
          })
        }
      </header>
    </div>
  )
}

export default MainPage
