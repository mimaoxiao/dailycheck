import React from 'react';
import styles from './DateShow.css';
import Calendar from './Calendar/Calendar';


export default class DateShow extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    render() {
        return (
            <div className={styles.parent}>
                <div className={styles.main}>
                    {this.props.year}.{this.props.month}
                </div>
                <div className={styles.calendar}>
                    <Calendar year={this.props.year} month={this.props.month}/>
                </div>
            </div>
          );
    }
}