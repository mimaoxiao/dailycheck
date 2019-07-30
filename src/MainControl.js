import React from 'react';
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import DateShow from './DateShow'
import styled from 'styled-components';

const Main=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`;

export default class MainControl extends React.Component {
    render() {
        return (
            <Main>
                <LeftArrow/>
                <DateShow/>
                <RightArrow/>
            </Main>
        );
    }
}