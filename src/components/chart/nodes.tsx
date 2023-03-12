import { FC } from 'react'
import { GanttNode, GanttOptionsType } from '../../types'
import Node from './node'

type Props = {
  nodes: GanttNode[];
  options: GanttOptionsType,
}

const Index: FC<Props> = ({ nodes = [], options }) => {
  return (
    <g>
      {nodes.map((node, index) => {
        return (
          <Node 
            options={options}
            node={node}
            index={index}
            key={index}
          />
        )
      })}
    </g>
  )
}

export default Index