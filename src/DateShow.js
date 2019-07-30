import React from 'react';
import styled from 'styled-components';


const DatePart=styled.div`
text-align:center;
font-size:20px;
align-self:flex-start;
`;

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
            <DatePart>
                {this.state.year}.{this.state.month}
            </DatePart>
        );
    }
}