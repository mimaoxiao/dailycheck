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
        let days=0;
        switch(this.props.month)
        {
            case 1:days=31;break;
            case 3:days=31;break;
            case 5:days=31;break;
            case 7:days=31;break;
            case 8:days=31;break;
            case 10:days=31;break;
            case 12: days=31;break;
            case 4:days=30;break;
            case 6:days=30;break;
            case 9:days=30;break;
            case 11:days=30;break;
            case 2:days=28;break;
            default:console.log("month error");break;
        }
        if(this.props.year%100!==0)
        {
            if(this.props.year%4===0)
            {
                days=29;
            }
        }
        if(this.props.year%100===0)
        {
            if(this.props.year%400===0)
            {
                days=29;
            }
        }

        return (
            <div className={styles.parent}>
                <div className={styles.main}>
                    {this.props.year}.{this.props.month}
                </div>
                <div className={styles.calendar}>
                    <Calendar number={days}/>
                </div>
            </div>
          );
    }
}