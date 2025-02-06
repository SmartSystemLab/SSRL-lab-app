import CustomLabel from "../../../components/CustomLabel"


export default function Project({ projectSummary, setProjectSummary, projectTitle, setProjectTitle }) {
    return (
        <div className=" space-y-4 mt-4">
            <CustomLabel
                htmlFor="projectTitle"
                labelText="Project Title:"
                inputType="text"
                inputValue={projectTitle || ''}
                onChange={(event) => setProjectTitle(event.target.value)}
                labelCLassName="'mt-1 font-medium text-lg mb-1 "
                inputClassName="appearance-none relative block w-full  px-3 py-2 border  rounded-lg focus:outline-none"
                placeholder="Add request title"
            />

            <div>
                <h2 className='mt-1 font-medium text-lg'>Project Summary/Details:</h2>
                <textarea
                    id="projectSummary"
                    value={projectSummary || ''}
                    onChange={(event) => setProjectSummary(event.target.value)}
                    className="appearance-none block w-full px-4 py-3 border   rounded-lg focus:outline-none resize-none h-32"
                    rows={6}
                    required
                />
            </div>

        </div>
    )
}  