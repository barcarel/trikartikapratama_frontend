import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="light">
        type
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem>UPS</MDBDropdownItem>
        <MDBDropdownItem>Battery</MDBDropdownItem>
        {/* <MDBDropdownItem>Something else here</MDBDropdownItem>
        <MDBDropdownItem divider />
        <MDBDropdownItem>Separated link</MDBDropdownItem> */}
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropdownPage;