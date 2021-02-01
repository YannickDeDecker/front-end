import React, { Component } from 'react'
import {Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'
/*
npm install reactstrap bootstrap faker
*/

class FakePersonGenerator extends Component {
    render() {
        return (
            <div>
                    {console.log(this.props.fakepeople)}
                    {this.props.fakepeople.map(person => (
                        <Card className="mt-5 border border-success" key={person.name}>
                        <CardImg top width="100%" src={person.avatar} alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text-success" tag="h5">{person.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Username: {person.username}</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button color="secondary">Click for more</Button>
                        </CardBody>
                    </Card>
                    ))}
            </div>
        )
    }
}

export default FakePersonGenerator