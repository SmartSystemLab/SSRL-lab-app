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
                inputClassName="appearance-none relative block w-full  px-3 py-2 border-black border rounded-lg focus:outline-none"
                placeholder="Add request title"
            >Project Title</CustomLabel>

            <div>
                <h2 className='mt-1 font-medium'>Project Summary/Details:</h2>
                <textarea
                    id="projectSummary"
                    value={projectSummary || ''}
                    onChange={(event) => setProjectSummary(event.target.value)}
                    className="appearance-none block w-full px-4 py-3  border border-slate-900 rounded-lg  text-slate-900 opacity-35 focus:text-black mt-l focus:opacity-100  focus:outline-none resize-none h-32"
                    rows={6}
                    required
                />
            </div>

        </div>
    )
}  