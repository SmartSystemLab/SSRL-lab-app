import CustomLabel from "../../../components/CustomLabel";

export default function Project({ summary, setSummary }) {
  return (
    <div className="mt-4 space-y-4">
      <div>
        <h2 className="mt-1 font-medium">Project Summary/Details:</h2>
        <textarea
          id="summary"
          value={summary || ""}
          onChange={(event) => setSummary(event.target.value)}
          className="mt-l block h-32 w-full resize-none appearance-none rounded-lg border border-slate-900 px-4 py-3 text-slate-900 opacity-35 focus:text-black focus:opacity-100 focus:outline-none"
          rows={6}
          required
        />
      </div>
    </div>
  );
}
