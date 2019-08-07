import React from 'react';
import styles from './MainControl.css';
import LeftArrow from './LeftArrow/LeftArrow';
import RightArrow from './RightArrow/RightArrow';
import DateShow from './DateShow/DateShow';

export default class MainControl extends React.Component {
    constructor(props){
        super(props);
        let today=new Date();
        this.state=({
            year:today.getFullYear(),
            month:today.getMonth()+1,
        });
        this.Goleft=this.Goleft.bind(this);
        this.Goright=this.Goright.bind(this);
    }

    Goleft(){
        let nextyear=this.state.year;
        let nextmonth=this.state.month-1;
        if(nextmonth===0){
            nextyear=nextyear-1;
            nextmonth=12;
        }
        this.setState({
            year:nextyear,
            month:nextmonth
        });
    }

    Goright(){
        let nextyear=this.state.year;
        let nextmonth=this.state.month+1;
        if(nextmonth===13){
            nextyear=nextyear+1;
            nextmonth=1;
        }
        this.setState({
            year:nextyear,
            month:nextmonth
        });
    }

    render() {
        return (
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <LeftArrow action={this.Goleft}/>
                </div>
                <div className={styles.div3}>
                    <DateShow year={this.state.year} month={this.state.month}/>
                </div>
                <div className={styles.div2}>
                    <RightArrow action={this.Goright}/>
                </div>
            </div>
        );
    }
}

