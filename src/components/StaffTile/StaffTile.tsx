import Staff from "../../types/Staff";
import "./StaffTile.scss";
import Counter from "../Counter/Counter";

type StaffTileProps = {
    staff: Staff[];
}


const StaffTile = ({ staff }: StaffTileProps) => {
    return (
        staff.map(member => (
        <div className="tracker__card" key={member.id}>
            <p className="tracker__card--info"  >Name : {member.name}</p>
            <p className="tracker__card--info" >Role: {member.role}</p>
            <Counter heading="Counter" />
        </div>
        ))
    )
};

export default StaffTile;