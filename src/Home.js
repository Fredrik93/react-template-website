import React from 'react'
import {Jumbotron} from './components/Jumbotron'
import { Projects } from './components/Card'
import styled from 'styled-components'

const Styles = styled.div`
   .rows .row {
       display:inline-block;
    margin:1rem;

    }
   .rows{
       padding-left:5rem;  
   }
    `;

const cardInfo = {
    card1: {
        title: "Jomiola",
        description: "Consulting"
    },
    card2: {
        title: "Agnart",
        description: "art & design"
    }
}
export const Home = () => (
    <Styles>
            <div>
        <h2>Headline yo ! </h2>
        <p>Bacon ipsum dolor amet strip steak capicola hamburger andouille, pig pork bresaola meatball porchetta burgdoggen. Ham hock meatloaf pastrami chicken pig, chislic kevin jowl landjaeger hamburger. Chislic sirloin frankfurter, short ribs capicola short loin ham hock meatball sausage jowl prosciutto shankle pancetta chicken. Turducken pastrami pork cow, shankle cupim tail chuck frankfurter bresaola shoulder leberkas pork loin.
            </p>
            <Jumbotron />
            <div className='rows'>
     <div className='row'> <Projects title={cardInfo.card1.title} description={cardInfo.card1.description}/></div>
     <div className='row'> <Projects title={cardInfo.card2.title} description={cardInfo.card2.description}/></div>
     <div className='row'> <Projects/></div>
 </div>
    </div>
    </Styles>
)

