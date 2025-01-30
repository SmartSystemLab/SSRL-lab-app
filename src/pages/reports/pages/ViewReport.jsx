import { useParams } from "react-router-dom"

const ViewReport = () => {
    const { id } = useParams()
    return (
        <div>ViewReport {id}</div>
    )
}

export default ViewReport