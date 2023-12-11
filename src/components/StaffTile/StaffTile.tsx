import team from "../../data/staff";
import "./StaffTile.scss";

type StaffTileProps = {
    name: string;
    role: string;
}


const StaffTile = () => {
    return (
        team.map(member => (
            <div className="staff-card">
            <p className="staff-card__info">Name : {member.name}</p>
            <p className="staff-card__info">Role: {member.role}</p>
        </div>
        ))
    )
};

export default StaffTile;