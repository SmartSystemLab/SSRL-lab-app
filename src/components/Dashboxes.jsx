import { Link } from 'react-router-dom'



const Dashboxes = ({ header, boxData, nav }) => {
    return (
        <div className='space-y-1 shadow-lg border-2 p-6 rounded-md text-left'>
            <h2 className='font-semibold text-2xl text-center'>{header}</h2>
            <ul className=''>
                {boxData.length > 0 ? (
                    boxData.map((data) => (
                        <li key={data.id} className="text-navBg2 text-base fade-in">
                            {data.name}
                        </li>

                    ))
                ) : (

                    <div className='space-y-2 '>
                        <div style={{ backgroundColor: 'lightgrey', opacity: 0.5 }} className="border-2 p-2 w-full animate-pulse"></div>
                        <div style={{ backgroundColor: 'lightgrey', opacity: 0.5 }} className="border-2 p-2 w-full animate-pulse"></div>
                    </div>

                )}
            </ul>
            <Link to={`/home/${nav}`}
                className=' text-logo block text-base text-right  rounded font-medium'

            >See more</Link>
        </div>

    )
}

export default Dashboxes