import { ChangeEventHandler } from "react";
import "./SearchRole.scss";


type SearchRoleProps = {
    name: string;
    filterName: string;
    handleSelect:ChangeEventHandler<HTMLSelectElement>;
};

const SearchRole = ({ name, filterName, handleSelect } : SearchRoleProps) => {
    return (
        <>
        <label className="tracker-search__filter tracker-search__filter--label" htmlFor={name}>Filter </label>
        <select className="tracker-search__filter tracker-search__filter--select" name={filterName} id={name} onChange={handleSelect}>
            <option value=""></option>
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