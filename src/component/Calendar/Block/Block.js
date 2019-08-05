import React from 'react';
import styles from './Block.css'

export default class Block extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    }

    render() {
        return (
            <div className={styles.parent}>
                {this.props.date}
            </div>
        );
    }
}