export default function FireIncident() {
    return (
        <main className="bg-slate-400">
            <form action="/incidents/fire-incident" method="post">
                <div className="w-full" id="form-section-a">
                    <div className="w-4/6 flex justify-center">
                        <input type="text" name="fdid" />
                        <select name="state" defaultValue="state">
                            <option value="state" disabled>State</option>
                        </select>
                        <input type="datetime" name="incident-date" />
                    </div>
                </div>
            </form>
        </main>
    );
}