import { useState } from 'react';
import './App.css';
import Gantt from 'time-gantt';
import Title from './components/title'
import XAxis from './components/xAxis'
import Chart from './components/chart'
import { data } from './data'

function App() {

  return (
    <div className="app">
      <Gantt data={data}/>
      <div className="chart-container">
        <Title title="任务时间甘特图"></Title>
        <Chart data={data}/>
        <XAxis />
      </div>
    </div>
  )
}

export default App
