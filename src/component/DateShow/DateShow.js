import React from 'react';
import styles from './DateShow.css';
import Modal from 'react-bootstrap/Modal';
import { Button,Accordion,Card } from 'react-bootstrap';

export default class DateShow extends React.Component{
    constructor(props){
        super(props);
        let today=new Date();
        this.state={
            year:today.getFullYear(),
            month:today.getMonth()+1,
            showEvent:false,
            showEventconfig:false
        };
        this.EventRelease=this.EventRelease.bind(this);
        this.EventSummon=this.EventSummon.bind(this);
        this.EventConfigSummon=this.EventConfigSummon.bind(this);
        this.EventConfigRelease=this.EventConfigRelease.bind(this);
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

    render() {
        return (
            <>
              <div className={styles.main} onClick={this.EventSummon}>
                {this.state.year}.{this.state.month}
              </div>
        
              <Modal show={this.state.showEvent} onHide={this.EventRelease}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Button variant="primary" size="lg" block onClick={this.EventConfigSummon}>
                            Block level button
                        </Button>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>

            <Modal show={this.state.showEventConfig} onHide={this.EventConfigRelease}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Click me!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Hello! I'm the body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Click me!
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
            </>
          );
    }
}