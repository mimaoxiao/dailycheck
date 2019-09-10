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
            datetime:datetime,
            configing:false,
            titleOnChange:'',
            messageOnChange:''
        });
        this.EditContent=this.EditContent.bind(this);
        this.ConfigComplete=this.ConfigComplete.bind(this);
        this.ReloadTitle=this.ReloadTitle.bind(this);
        this.ReloadMessage=this.ReloadMessage.bind(this);
        this.ConfigEvent=this.ConfigEvent.bind(this);
    }

    EditContent(event){
        event.stopPropagation();
        this.setState({
            configing:true
        })
    }

    ConfigComplete(){
        this.setState({
            configing:false
        })
    }

    ReloadTitle(event){
        this.setState({titleOnChange: event.target.value});
    }
    ReloadMessage(event){
        this.setState({messageOnChange: event.target.value});
    }

    ConfigEvent(){
        this.setState({
            title:this.state.titleOnChange,
            message:this.state.messageOnChange,
            configing:false
        })
        this.setState({
            titleOnChange:'',
            messageOnChange:''
        })
    }

    render(){
        return (
            <>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={this.state.keynumber}>
                    <div className={styles.parent}>
                        <div className={styles.content}>
                            [{this.state.datetime.getFullYear()}-{this.state.datetime.getMonth()}-{this.state.datetime.getDate()}] [{this.state.datetime.getHours()}:{this.state.datetime.getMinutes()}] {this.state.title}
                        </div>
                        <div className={styles.edit}>
                            <svg onClick={this.EditContent} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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

            <Modal show={this.state.configing} onHide={this.ConfigComplete}>
                <Modal.Header closeButton>
                  <Modal.Title>Change Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="NewTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={this.state.titleOnChange} onChange={this.ReloadTitle} type="input"/>
                    </Form.Group>
                    <Form.Group controlId="NewMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control value={this.state.messageOnChange} onChange={this.ReloadMessage} as="textarea" rows="3" />
                    </Form.Group>
                </Form>
                    <Button variant="primary" block onClick={this.ConfigEvent}>
                        Complete
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
            </>
        );
    }
}