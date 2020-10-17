import React, { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { getIssue } from "../functions/fetch"

const IssuePage = props => {
  const [data, setData] = useState({})
  const issueIdx = useParams().id
  console.log(data)
  console.log(data.user)

  const getDate = (dateStr) => {
    const date = new Date(Date.parse(dateStr))
    return date.toLocaleString()
  }

  useEffect(() => {
    if (Object.keys(data).length === 0) {
      getIssue(setData, issueIdx)
    }
  }, [data, issueIdx])

  return (
    <Card style={{ padding: "2rem" }}>
      {
        data &&
        <>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <div style={{ fontSize: "2rem", marginRight: "1rem" }}>
              #{data.number}
            </div>
            <div style={{ fontSize: "2rem", marginRight: "2rem" }}>
              {data.title}
            </div>
            {
              data.user && data.user.avatar_url &&
              <img
                src={data.user.avatar_url}
                alt="user avatar"
                width="40"
                height="40"
                style={{ borderRadius: "50%" }}
              />
            }
          </div>
          <div>
            {data.body}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {
              data.user && data.user.login &&
              <>
                <p style={{ marginRight: "0.5rem" }}>
                  By
                </p>
                <Link to={data.user.url} style={{ marginRight: "1rem" }}>
                  {data.user.login}
                </Link>
              </>
            }
            {
              data.created_at &&
              <div style={{ color: "gray" }}>
                {getDate(data.created_at)}
              </div>
            }
          </div>
        </>
      }  
    </Card>
  )
}

export default IssuePage
