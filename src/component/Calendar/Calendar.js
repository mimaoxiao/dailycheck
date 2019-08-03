import React from 'react';
import Block from './Block/Block';
import styles from './Calendar.css'

export default class Calendar extends React.Component{
    render() {
        let Blocks=[];
        for(let i=0;i<this.props.number;i++)
        {
            Blocks.push(<div className={styles.child}><Block/></div>);
        }
        return (
            <div className={styles.parent}>
                {Blocks}
            </div>
        );
    }
}