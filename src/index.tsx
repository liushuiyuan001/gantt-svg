import { FC } from 'react';
import Title from './components/title'
import XAxis from './components/xAxis'
import Chart from './components/chart'
import { GanttData, GanttOptionsType } from './types'

type Props = {
  title?: string;
  data: GanttData,
  xAxisArr: string[],
  options?: GanttOptionsType,
}


const Index:FC<Props> =  ({
  title = '任务时间甘特图',
  data,
  xAxisArr,
  options = {
    chartWidth: 1036, 
    columnWidth: 21.5,
    rowHeight: 55
  }
}) => {
  return (<>
      <Title title={title}></Title>
      <Chart data={data} options={options} xAxisArr={xAxisArr}/>
      <XAxis xAxisArr={xAxisArr} options={options}/>
  </>)
}

export default Index;