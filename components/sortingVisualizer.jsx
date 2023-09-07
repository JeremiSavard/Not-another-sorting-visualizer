import React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './sortingVisualizer.module.css';
import * as algo from '../src/sortingAlgorithms.js';


export default class SortingVisualizer extends React.Component {

    constructor(props){
        super(props);
        this.state = { 
            array: [],
            numberBars: 100,
            disabled: false
        };
    }


    componentDidMount() {
        this.resetArray()
    }

    reset(){
        window.location.reload(false);
        this.resetArray();
    }

    handleChange = (event, newValue) => {
        this.setState({ numberBars: newValue });
        this.resetArray();
      };

    resetArray(){
        console.log(this.state.numberBars)
        const array = [];
        for (let i = 0; i < this.state.numberBars; i++){
            array.push(randomIntFromInterval(5, 600));
        }
        this.setState({array: array});
        return;
    }

    bubbleSort(){
        let results = [];
        let bars = [];
        results = algo.bubbleSort(this.state.array)
        bars = document.getElementsByClassName("sortingVisualizer_arrayBar__Yomyf")
    
        for (let i = 0; i < results[0].length; i++) {
            compare(results, bars, i);
            swap(results, bars, i);
        }
    
    }

    insertionSort(){
        let results = [];
        let bars = [];
        results = algo.insertionSort(this.state.array)
        bars = document.getElementsByClassName("sortingVisualizer_arrayBar__Yomyf")
    
        for (let i = 0; i < results.length; i++) {
            setTimeout(() => {
                if(results[i][2] == 0){
                    bars[results[i][0]].style.backgroundColor = "red";
                    bars[results[i][1]].style.backgroundColor = "red";
                }
                
            }, i*10);
    
            setTimeout(() => {
                if(results[i][2] == 0){
                    bars[results[i][0]].style.height = bars[results[i][1]].style.height
                    console.log(results[i][0])
                }
                else if(results[i][2] == 1){
                    bars[results[i][0]].style.height = (results[i][1]+"px")
                }

                if(results[i][2] == 0){
                    bars[results[i][0]].style.backgroundColor = "blue";
                    bars[results[i][1]].style.backgroundColor = "blue";
                }
            }, (i)*10);
        }
    }

    selectionSort(){
        let results = [];
        let temp = 0;
        let bars = [];
        results = algo.selectionSort(this.state.array)
        bars = document.getElementsByClassName("sortingVisualizer_arrayBar__Yomyf")
    
        for (let i = 0; i < results.length; i++) {
            setTimeout(() => {
                bars[results[i][0]].style.backgroundColor = "red";
                bars[results[i][1]].style.backgroundColor = "red";
            }, i*10);
    
            setTimeout(() => {
                temp = bars[results[i][0]].style.height
                bars[results[i][0]].style.height = bars[results[i][1]].style.height
                bars[results[i][1]].style.height = temp
    
                bars[results[i][0]].style.backgroundColor = "blue";
                bars[results[i][1]].style.backgroundColor = "blue";
               
            }, (i+1)*10);
        }
    }

    quickSort(){
        let results = [];
        let temp = 0;
        let bars = [];
        results = algo.quickSort(this.state.array)
        bars = document.getElementsByClassName("sortingVisualizer_arrayBar__Yomyf")
        
        for (let i = 0; i < results.length; i++) {
               if(results[i][0]==results[i][1]){
                console.log("do nothing")
               }
               else{
                    setTimeout(() => {
                        bars[results[i][0]].style.backgroundColor = "red";
                        bars[results[i][1]].style.backgroundColor = "red";
                    }, i*10);
                    setTimeout(() => {
                        temp = bars[results[i][0]].style.height
                        bars[results[i][0]].style.height = bars[results[i][1]].style.height
                        bars[results[i][1]].style.height = temp
    
                        bars[results[i][0]].style.backgroundColor = "blue";
                        bars[results[i][1]].style.backgroundColor = "blue";
                    }, (i+1)*10);
                }  
        }
    }


    render() {
        const {array} = this.state;

        return (
            <div>
                <div className={styles.banner}>
                    <Box sx={{ width: 500 }}>
                    <Typography id="input-slider" gutterBottom>
                        Number of bars:
                    </Typography>
                        <Slider onChange={this.handleChange} defaultValue={100} step={1} min={20} max={220} disabled={this.state.disabled} aria-labelledby="input-slider" />
                    </Box>

                    <div>
                            <Button className={styles.buttonAlgo} variant="contained" onClick={() => this.bubbleSort()} disabled={this.state.disabled}>Bubble Sort</Button>
                            <Button className={styles.buttonAlgo} variant="contained" onClick={() => this.quickSort()} disabled={this.state.disabled}>Quick Sort (not recursive)</Button>
                            <Button className={styles.buttonAlgo} variant="contained" onClick={() => this.selectionSort()} disabled={this.state.disabled}>Selection Sort</Button>
                            <Button className={styles.buttonAlgo} variant="contained" onClick={() => this.insertionSort()} disabled={this.state.disabled}>Insertion Sort (buggy :/)</Button>
                    </div>

                    <div>
                        <Button className={styles.buttonNew} variant="contained" onClick={() => this.resetArray()} disabled={this.state.disabled}>Generate New Array</Button>
                        <Button className={styles.buttonReset} variant="contained" onClick={() => this.reset()}>Stop and Reset</Button>
                    </div>

                </div>

                <div className={styles.arrayContainer}>
                
                    {array.map((value, idx) => (
                        <div 
                            className={styles.arrayBar} 
                            key={idx}
                            style={{height: `${value}px`}}></div>
                    ))}
                
                </div>
            </div>
      );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max-min-1) + min);
}

function compare(results, bars, i){
    setTimeout(() => {
        bars[results[1][i][0]].style.backgroundColor = "red";
        bars[results[1][i][1]].style.backgroundColor = "red";
    }, i*10);
}

function swap(results, bars, i){
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
