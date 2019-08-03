import React from 'react';
import styles from './DateShow.css';

export default class DateShow extends React.Component{
    constructor(props){
        super(props);
        let today=new Date();
        this.state={
            year:today.getFullYear(),
            month:today.getMonth()+1,
        };
    }

    render() {
        return (
            <div className={styles.main}>
                {this.state.year}.{this.state.month}
            </div>
        );
    }
}