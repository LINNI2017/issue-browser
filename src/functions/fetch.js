import { BASE_URL } from "../views/App"

export const getAllIssues = (setData) => {
  fetch(BASE_URL)
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => console.log(error))
}

export const getPageIssue = (setData, page, perPage) => {
  fetch(`${BASE_URL}?page=${page}&per_page=${perPage}`)
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => console.log(error))
}

export const getIssue = (setData, issueIdx) => {
  fetch(`${BASE_URL}/${issueIdx}`)
    .then(response => response.json())
    .then(data => {
      setData(data)
    })
    .catch(error => console.log(error))
}
