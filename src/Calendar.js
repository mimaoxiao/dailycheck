import React from 'react';
import Block from './Block'

export default class Calendar extends React.Component{
    render() {
        let Blocks=[];
        for(let i=0;i<this.props.number;i++)
        {
            Blocks.push(<Block/>);
        }
        return (
                {Blocks}
        );
    }
}