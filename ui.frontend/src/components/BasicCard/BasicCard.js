import React from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BasicCardConfig = {

    emptyLabel: 'BasicCard',
    isEmpty: function(props) {
        return !props || !props.title;
    }
};

function BasicCardImpl(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.cardImage} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default function BasicCard(props) {

    if (BasicCardConfig.isEmpty(props)) {
        return null;
    }

    return BasicCardImpl(props);

}

MapTo('wknd-spa-react/components/basiccard')(BasicCard, BasicCardConfig);