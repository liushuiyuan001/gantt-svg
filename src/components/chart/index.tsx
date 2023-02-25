import { FC } from 'react';
import './index.css'
import { GanttData } from '../../types'
import YAxis from '../yAxis'
import SplitLine from './splitLine'
import Nodes from './nodes'
import { ROW_HEIGHT, START_INDEX, CHART_WIDTH } from '../../constant'

type Props = {
  data: GanttData;
}

const Index: FC<Props> = ({ data }) => {

  const { nodes = [] } = data;

  const chartHeight = ROW_HEIGHT * nodes.length + START_INDEX[1]

  return (
    <div className="chart-svg">
      <svg
        version='1.1'
        baseProfile={'full'}
        width={CHART_WIDTH + 146}
        height={chartHeight}
      >
        <g
          transform={`translate(${START_INDEX[0]}, ${START_INDEX[1]})`}
        >
          <SplitLine nodes={nodes}/> 
          <Nodes nodes={nodes} />
        </g>
        <YAxis nodes={nodes}/>
      </svg>
    </div>
  )
}


export default Index;