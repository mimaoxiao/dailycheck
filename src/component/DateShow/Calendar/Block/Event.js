import React from 'react';
import { Card,Accordion,Modal,Form } from 'react-bootstrap';

export default class Event extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            keynumber:this.props.keynumber,
            title:this.props.title,
            message:this.props.message,
            datetime:new Date()
        });
    }

    render(){
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.state.keynumber}>
                    [{this.state.datetime.getHours()}:{this.state.datetime.getMinutes()}]{this.state.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.state.keynumber}>
                    <Card.Body>
                        {this.state.message}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    }
}