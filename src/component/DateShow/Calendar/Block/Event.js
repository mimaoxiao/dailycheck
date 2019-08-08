import React from 'react';
import { Card,Accordion,Modal,Form } from 'react-bootstrap';

export default class Event extends React.Component{
    constructor(props){
        super(props);
        let datetime=new Date();
        datetime.setDate(this.props.date);
        datetime.setMonth(this.props.month);
        datetime.setFullYear(this.props.year);

        this.state=({
            keynumber:this.props.keynumber,
            title:this.props.title,
            message:this.props.message,
            datetime:datetime
        });
    }

    render(){
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.state.keynumber}>
                    [{this.state.datetime.getFullYear()}-{this.state.datetime.getMonth()}-{this.state.datetime.getDate()}][{this.state.datetime.getHours()}:{this.state.datetime.getMinutes()}]{this.state.title}
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