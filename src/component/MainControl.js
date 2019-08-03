import React from 'react';
import styles from './MainControl.css';
import LeftArrow from './LeftArrow/LeftArrow';
import RightArrow from './RightArrow/RightArrow';
import DateShow from './DateShow/DateShow';
import Calendar from './Calendar/Calendar';

export default class MainControl extends React.Component {
    render() {
        return (
            <div className={styles.parent}>
                <div className={styles.div1}>
                    <LeftArrow />
                </div>
                <div className={styles.div3}>
                    <DateShow/>
                </div>
                <div className={styles.div2}>
                    <RightArrow/>
                </div>
                <div className={styles.div4}>
                    <Calendar number={35} />
                </div>
            </div>
        );
    }
}

