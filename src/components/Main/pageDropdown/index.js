import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function SortBy() {
  return (
    <DropdownButton id="dropdown-basic-button" title="By Genres">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Action</Dropdown.Item>
    </DropdownButton>
  );
}

export default SortBy;