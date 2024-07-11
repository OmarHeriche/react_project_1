import TeamMemberCard from "./TeamMemberCard";

export default ({ employees, selectedTeam, handleCardClick }) => {
    return employees.map((employee) => (
        <TeamMemberCard
            key={employee.id}
            handleCardClick={handleCardClick}
            employee={employee}
            selectedTeam={selectedTeam}
        />
    ));
};
