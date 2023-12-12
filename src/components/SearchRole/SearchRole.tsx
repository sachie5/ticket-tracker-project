import { ChangeEventHandler } from "react";
import "./SearchRole.scss";


type SearchRoleProps = {
    name: string;
    role: string;
    handleSelect:ChangeEventHandler<HTMLSelectElement>;
};

const SearchRole = ({ name, handleSelect } : SearchRoleProps) => {
    return (
        <>
        <label htmlFor={name}>Filter by role: </label>
        <select name={name} id={name} onChange={handleSelect}>
            <option value="">Choose a role</option>
            <option value="junior-software-developer">Junior Software Developer</option>
            <option value="software-developer">Software Developer</option>
            <option value="senior-software-developer">Senior Software Developer</option>
            <option value="project-manager">Project Manager</option>
            <option value="tester">Tester</option>
            <option value="hard-man">Hard Man</option>
        </select></>
    )
}

export default SearchRole;