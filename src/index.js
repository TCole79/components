import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
            author="Tommy" 
            timeAgo="Today at 16:45PM" 
            text="Why Lisa, why?" 
            avatar={faker.image.image()}/>

            <CommentDetail 
            author="Tommy W" 
            timeAgo="Today at 02:00AM" 
            text="Oh hai Mark!" 
            avatar={faker.image.image()}/>

            <CommentDetail 
            author="Wisseau" 
            timeAgo="Yesterday at 11:15PM" 
            text="You must be kidding me aren't you." 
            avatar={faker.image.image()}/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));