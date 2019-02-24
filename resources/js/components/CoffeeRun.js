import React from 'react';
import { Card } from 'react-bootstrap';

const CoffeeRun = (props) => {
    const { data } = props;

    return (
        <Card className={'coffee-run-list-item mb-3'}>
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.ends_at}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CoffeeRun;