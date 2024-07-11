import maleImage from "./assets/profile-pic-back.png";
import femaleImage from "./assets/test.png";

export default ({employee,selectedTeam,handleCardClick}) => (
    <div
        key={employee.id}
        id={employee.id}
        className={
            employee.teamName === selectedTeam
                ? "card m-2 selected"
                : "card m-2"
        }
        style={{ cursor: "pointer" }}
        onClick={handleCardClick}
    >
        <img
            src={employee.gender === "Male" ? maleImage : femaleImage}
            alt=""
            className="card-img-top"
        />
        <div className="card-body">
            <h5 className="card-title">{employee.name}</h5>
            <p className="card-text">
                <strong>Designation:</strong> {employee.designation}
            </p>
        </div>
    </div>
);
