import Staff from "../../types/Staff";
import "./StaffTile.scss";
import Counter from "../Counter/Counter";

type StaffTileProps = {
    staff: Staff[];
}


const StaffTile = ({ staff }: StaffTileProps) => {
    return (
        staff.map(member => (
            <div className="staff-card">
            <p className="staff-card__info staff-card__info--name"  >Name : {member.name}</p>
            <p className="staff-card__info staff-card__info--role" >Role: {member.role}</p>
            <Counter heading="Counter" />
        </div>
        ))
    )
};

export default StaffTile;