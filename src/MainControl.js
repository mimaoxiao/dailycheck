import React from 'react';
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import DateShow from './DateShow'
import styled from 'styled-components';
import Calendar from './Calendar'

const Main=styled.div`
border:2px soild green;

display: grid;
grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 2fr 4fr;
grid-column-gap: 20px;
grid-row-gap: 20px;
&>.div1 { grid-area: 1 / 1 / 3 / 2; }
&>.div2 { grid-area: 1 / 3 / 3 / 4; }
&>.div3 { grid-area: 1 / 2 / 2 / 3; }
&>.div4 { grid-area: 2 / 2 / 3 / 3; }
`;

export default class MainControl extends React.Component {
    render() {
        return (
            <Main>
                <LeftArrow class="div1"/>
                <RightArrow class="div2"/>
                <DateShow class="div3" />
                <Calendar class="div4" number={35}/>
            </Main>
        );
    }
}

