export default ({ selectedTeam, setSelectedTeam }) => (
    <div className="col-6">
        <select
            name=""
            id=""
            className="
form-select form-select-lg
"
            onChange={(event) => {
                return setSelectedTeam(event.target.value);
            }}
            value={selectedTeam}
        >
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
        </select>
    </div>
);
