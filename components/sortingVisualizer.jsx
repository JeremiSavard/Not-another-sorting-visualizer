import React from 'react';
import styles from './sortingVisualizer.module.css';
import * as algo from '../src/sortingAlgorithms.js';

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
        for (let i = 0; i < 150; i++){
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({array});
    }

    bubbleSort(){
        let results = [];
        let bars = [];
        results = algo.bubbleSort(this.state.array)
        bars = document.getElementsByClassName("sortingVisualizer_arrayBar__Yomyf")

        for (let i = 0; i < results[0].length; i++) {
            this.compare(results, bars, i);
            this.swap(results, bars, i);
        }

    }

    compare(results, bars, i){
        setTimeout(() => {
            bars[results[1][i][0]].style.backgroundColor = "red";
            bars[results[1][i][1]].style.backgroundColor = "red";
        }, i*10);
    }

    swap(results, bars, i){
        let temp = 0;
        setTimeout(() => {
            if(results[0][i][0] == -1){
                console.log("do nothing")

                bars[results[1][i][0]].style.backgroundColor = "blue";
                bars[results[1][i][1]].style.backgroundColor = "blue";
            }
            else{
                console.log(results[0][i][0])
                temp = bars[results[0][i][0]].style.height
                bars[results[0][i][0]].style.height = bars[results[0][i][1]].style.height
                bars[results[0][i][1]].style.height = temp

                bars[results[1][i][0]].style.backgroundColor = "blue";
                bars[results[1][i][1]].style.backgroundColor = "blue";
            }
        }, (i+1)*10);
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
            <button onClick={() => this.bubbleSort()}>Quick Sort</button>
        </div>
      );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min-1) + min);
}
