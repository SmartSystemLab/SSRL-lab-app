import { useParams } from 'react-router-dom';

const ProjectCard = () => {
    const { id } = useParams()
    console.log(id)

    return (
        <div>
            {id}
        </div>
    )
}

export default ProjectCard