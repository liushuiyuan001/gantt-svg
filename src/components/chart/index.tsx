import { FC } from 'react';
import './index.css'
import { GanttData } from '../../types'
import YAxis from '../yAxis'
import SplitLine from './splitLine'
import Nodes from './nodes'
import { GanttOptionsType } from '../../types'
import { START_INDEX } from '../../constant'

type Props = {
  data: GanttData;
  options: GanttOptionsType,
  xAxisArr: string[],
}

const Index: FC<Props> = ({ data, options, xAxisArr }) => {

  const { nodes = [] } = data;
  const { rowHeight, chartWidth } = options;

  const chartHeight = rowHeight * nodes.length + START_INDEX[1]

  return (
    <div className="chart-svg">
      <svg
        version='1.1'
        baseProfile={'full'}
        width={chartWidth + 146}
        height={chartHeight}
      >
        <g
          transform={`translate(${START_INDEX[0]}, ${START_INDEX[1]})`}
        >
          <SplitLine nodes={nodes} options={options} xAxisArr={xAxisArr}/> 
          <Nodes nodes={nodes} options={options}/>
        </g>
        <YAxis nodes={nodes} options={options}/>
      </svg>
    </div>
  )
}


export default Index;