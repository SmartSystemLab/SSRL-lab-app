import { useParams } from 'react-router-dom';


const NotificationCard = () => {
    const { id } = useParams()
    console.log(id)

    return (
        <div>
            {id}
        </div>
    )
}

export default NotificationCard