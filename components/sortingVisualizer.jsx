import React from 'react';
import styles from './sortingVisualizer.module.css';

export default class SortingVisualizer extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for (let i = 0; i < 310; i++){
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    render() {
        const {array} = this.state;

        return (
            <div className={styles.arrayContainer}>
                {array.map((value, idx) => (
                    <div 
                        className={styles.arrayBar} 
                        key={idx}
                        style={{height: `${value}px`}}></div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
        </div>
      );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min-1) + min);
}
