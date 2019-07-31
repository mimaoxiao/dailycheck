import React, { Component } from 'react';
// 将样式文件当成模块引入
import styles from "./test.css";


export default class Test extends Component {
    render() {
        return (
            <div>
                <div className={styles.test}>Hello</div>
            </div>
        )
    }
}