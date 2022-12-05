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

// Wrapper function that includes react-open-weather component
function ButtonExImpl(props) {

    return (
        <Button className="cmp-button-ex" variant="primary">
            {props.text}
        </Button>
    );
}

export default function ButtonEx(props) {

    // render nothing if component not configured
    if (ButtonExConfig.isEmpty(props)) {
        return null;
    }

    // render ReactWeather component if component configured
    // pass props to ReactWeatherWrapper. These props include the mapped properties from AEM JSON
    return ButtonExImpl(props);

}

// Map OpenWeather to AEM component
MapTo('wknd-spa-react/components/button')(ButtonEx, ButtonExConfig);
