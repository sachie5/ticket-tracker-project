## Ticket tracker Project

This was a REACT project to create a ticket tracker for an employee.

# Requirements

1. Built in REACt and TypeScript.
2. Each component should manage its own state.
3. Components should be generated using a map().

# Extension

1. Add a search by name box.
2. Add a selevt by role dropdown box.

# Key code

The key bit of code is generating the StaffTile with the information from the staff data.

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