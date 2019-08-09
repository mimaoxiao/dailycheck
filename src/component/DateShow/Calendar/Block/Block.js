import React from 'react';
import styles from './Block.css';
import Event from './Event/Event';
import { Button,Accordion,Modal,Form } from 'react-bootstrap';

export default class Block extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showEvent:false,
            showEventConfig:false,
            Eventlist:[],
            loadTitle:"",
            loadMessage:""
        };
        this.EventRelease=this.EventRelease.bind(this);
        this.EventSummon=this.EventSummon.bind(this);
        this.EventConfigSummon=this.EventConfigSummon.bind(this);
        this.EventConfigRelease=this.EventConfigRelease.bind(this);
        this.AddEvent=this.AddEvent.bind(this);
        this.ReloadTitle=this.ReloadTitle.bind(this);
        this.ReloadMessage=this.ReloadMessage.bind(this);
    }

    EventSummon(){
        this.setState({showEvent:true});
    }
    EventRelease(){
        this.setState({showEvent:false});
    }

    EventConfigSummon(){
        this.setState({showEventConfig:true});
    }
    EventConfigRelease(){
        this.setState({showEventConfig:false});
    }

    ReloadTitle(event){
        this.setState({loadTitle: event.target.value});
    }
    ReloadMessage(event){
        this.setState({loadMessage: event.target.value});
    }

    AddEvent(){
        let newEvent=<Event year={this.props.year} month={this.props.month} date={this.props.date} title={this.state.loadTitle} message={this.state.loadMessage} keynumber={this.state.Eventlist.length} />;
        let newList=this.state.Eventlist;
        newList.push(newEvent);
        this.setState({
            Eventlist:newList,
            loadTitle:"",
            loadMessage:"",
            showEventConfig:false,
            showEvent:false
        });
    }


    render() {
        return (
            <>
            <div className={styles.parent} onClick={this.EventSummon}>
                {this.props.date}
            </div>
            <Modal show={this.state.showEvent} onHide={this.EventRelease}>
                <Modal.Header closeButton>
                  <Modal.Title>Event List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion>
                        <div>
                            {this.state.Eventlist}
                        </div>
                        <div className={styles.addbutton}>
                            <Button variant="primary" block onClick={this.EventConfigSummon}>
                                add event
                            </Button>
                        </div>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>

            <Modal show={this.state.showEventConfig} onHide={this.EventConfigRelease}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="NewTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control value={this.state.loadTitle} onChange={this.ReloadTitle} type="input"/>
                    </Form.Group>
                    <Form.Group controlId="NewMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control value={this.state.loadMessage} onChange={this.ReloadMessage} as="textarea" rows="3" />
                    </Form.Group>
                </Form>
                    <Button variant="primary" block onClick={this.AddEvent}>
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