import { FC } from 'react'
import { GanttNode, GanttOptionsType } from '../../types'
import Node from './node'

type Props = {
  nodes: GanttNode[];
  options: GanttOptionsType,
  showDate: string,
  endDate: string,
}

const Index: FC<Props> = ({ nodes = [], options, showDate, endDate }) => {
  return (
    <g>
      {nodes.map((node, index) => {
        return (
          <Node 
            options={options}
            node={node}
            index={index}
            showDate={showDate}
            endDate={endDate}
            key={index}
          />
        )
      })}
    </g>
  )
}

export default Index