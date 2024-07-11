import { useState } from "react";

export default ({ selectedTeam, employees, setSelectedTeam }) => {
    const [groupes, setGroupes] = useState(grouping());
    function grouping() {
        let result = [];
        let teamMembers = employees.filter((ele) => ele.teamName === "TeamA");
        let teamA = {
            teamName: "TeamA",
            teamMembers: teamMembers,
            collapsed: selectedTeam === "TeamA" ? false : true,
        };
        result.push(teamA);
        teamMembers = employees.filter((ele) => ele.teamName === "TeamB");
        let teamB = {
            teamName: "TeamB",
            teamMembers: teamMembers,
            collapsed: selectedTeam === "TeamB" ? false : true,
        };
        result.push(teamB);
        teamMembers = employees.filter((ele) => ele.teamName === "TeamC");
        let teamC = {
            teamName: "TeamC",
            teamMembers: teamMembers,
            collapsed: selectedTeam === "TeamC" ? false : true,
        };
        result.push(teamC);
        teamMembers = employees.filter((ele) => ele.teamName === "TeamD");
        let teamD = {
            teamName: "TeamD",
            teamMembers: teamMembers,
            collapsed: selectedTeam === "TeamD" ? false : true,
        };
        result.push(teamD);
        return result;
    }

    function handleClick(event) {
        const teamName = event.target.id;
        setSelectedTeam(teamName);
        setGroupes(
            groupes.map((team) =>
                team.teamName === teamName
                    ? { ...team, collapsed: !team.collapsed }
                    : { ...team }
            )
        );
        setSelectedTeam(event.target.id);
    }

    return (
        <main className="container">
            {groupes.map((team) => (
                <div
                    key={team.teamName}
                    className="card m-2"
                    style={{ cursor: "pointer" }}
                >
                    <h4
                        id={team.teamName}
                        className="card-header bg-primary text-white"
                        onClick={handleClick}
                    >
                        {team.teamName}
                    </h4>
                    <div
                        id={team.teamName}
                        className={team.collapsed ? "collapse" : ""}
                    >
                        <hr />
                        {team.teamMembers.map((employee) => (
                            <div key={employee.id} className="card-body">
                                <h5 className="card-title">
                                    Full Name : {employee.name}
                                </h5>
                                <p className="card-text">
                                    Designation : {employee.designation}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </main>
    );
};
