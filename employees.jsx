

import SelectTeam from "./SelectTeam.jsx";
import TeamMembers from "./TeamMembers.jsx";

export default (props) => {
    let { selectedTeam, handleCardClick, employees, setSelectedTeam } = props;

    return (
        <main className="container">
            <div
                className="row 
            justify-content-center mt-3
            mb-3
            "
            >
                <div
                    className="row 
            justify-content-center mt-3
            mb-3
            "
                >
                    <SelectTeam
                        selectedTeam={selectedTeam}
                        setSelectedTeam={setSelectedTeam}
                    />
                </div>
                <div className="col-8">
                    <div className="card-collection">
                        <TeamMembers
                            employees={employees}
                            selectedTeam={selectedTeam}
                            handleCardClick={handleCardClick}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};
