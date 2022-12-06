
import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import { Dropdown, DropdownButton } from 'react-bootstrap'

const DropDownExConfig = {

    emptyLabel: 'DropDown',
    isEmpty: function(props) {
        return !props || !props.label;
    }
};

function DropDownExImpl(props) {

    const handleSelect=(e)=>{
        console.log(e);
    }

    return (
        <DropdownButton id="dropdown-basic-button" title={props.label} onSelect={handleSelect}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
    );
}

export default function DropDownEx(props) {

    if (DropDownExConfig.isEmpty(props)) {
        return null;
    }

    return DropDownExImpl(props);

}

MapTo('wknd-spa-react/components/dropdown')(DropDownEx, DropDownExConfig);
