import { useParams } from "react-router-dom"

const SingleRequests = () => {
  const { id } = useParams()
  return (
    <div>SingleRequests {id}</div>
  )
}

export default SingleRequests