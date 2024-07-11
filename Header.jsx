export default ({ selectedTeam, teamMembers }) => {
    return (
        <header className="container">
            <div className="
            row justify-content-center mt-3 mb-4
            ">
                <h1>Team Member Allocation</h1>
                <h3>
                    we have {teamMembers} per {selectedTeam}
                </h3>
            </div>
        </header>
    );
};
