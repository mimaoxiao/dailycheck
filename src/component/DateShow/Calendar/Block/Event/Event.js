import React from 'react';
import { Card,Accordion,Modal,Form,Button } from 'react-bootstrap';
import styles from './Event.css';

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
        this.editcontent=this.editcontent.bind(this);
    }

    editcontent(event){
        event.stopPropagation();
    }

    render(){
        return (
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.state.keynumber}>
                    <div className={styles.parent}>
                        <div className={styles.content}>
                            [{this.state.datetime.getFullYear()}-{this.state.datetime.getMonth()}-{this.state.datetime.getDate()}] [{this.state.datetime.getHours()}:{this.state.datetime.getMinutes()}] {this.state.title}
                        </div>
                        <div className={styles.edit}>
                            <svg onClick={this.editcontent} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                <path fill="none" d="M0 0h24v24H0z"/>
                                <path d="M7.243 18H3v-4.243L14.435 2.322a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L7.243 18zM3 20h18v2H3v-2z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
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