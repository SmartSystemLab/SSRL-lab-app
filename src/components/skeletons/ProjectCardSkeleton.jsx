const ProjectCardSkeleton = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center">
                <div className="loader w-12 h-12 border-4 border-gray-300 border-t-navBg2 rounded-full animate-spin"></div>
                <p className="mt-4 text-navBg2 font-semibold">Loading....</p>
            </div>
        </div>


    )
}

export default ProjectCardSkeleton 