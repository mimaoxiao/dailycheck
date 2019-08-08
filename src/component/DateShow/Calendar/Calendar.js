import React from 'react';
import Block from './Block/Block';
import styles from './Calendar.css'

export default class Calendar extends React.Component{
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
        if(this.props.month===2)
        {
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
        }

        let Blocks=[];
        for(let i=0;i<days;i++)
        {
            Blocks.push(<Block year={this.props.year} month={this.props.month} date={i+1}/>);
        }
        return (
            <div className={styles.parent}>
                {Blocks}
            </div>
        );
    }
}