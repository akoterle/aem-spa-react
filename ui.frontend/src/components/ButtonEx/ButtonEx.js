import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import {Button} from 'react-bootstrap';

// Logic to render placeholder or component
const ButtonExConfig = {

    emptyLabel: 'ButtonEx',
    isEmpty: function(props) {
        return !props || !props.text;
    }
};

function ButtonExImpl(props) {

    return (
        <Button className="cmp-button-ex" variant="primary">
            {props.text}
        </Button>
    );
}

export default function ButtonEx(props) {

    if (ButtonExConfig.isEmpty(props)) {
        return null;
    }

    return ButtonExImpl(props);

}

MapTo('wknd-spa-react/components/button')(ButtonEx, ButtonExConfig);
