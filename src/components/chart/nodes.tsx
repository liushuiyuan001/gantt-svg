import { FC } from 'react'
import { GanttNode } from '../../types'
import Node from './node'

type Props = {
  nodes: GanttNode[];
}

const Index: FC<Props> = ({ nodes = []}) => {
  return (
    <g>
      {nodes.map((node, index) => {
        return (
          <Node 
            node={node}
            index={index}
          />
        )
      })}
    </g>
  )
}

export default Index