import { FC } from 'react'
import { GanttNode, GanttOptionsType } from '../../types'

type Props = {
  nodes: GanttNode[],
  options: GanttOptionsType
}

const Index: FC<Props> = ({ nodes, options }) => {

  const { rowHeight } = options;
  return (
    <g>
      {nodes.map((node, index) => {
        const y = 54 + rowHeight * index
        return <text
          key={index}
          x="24"
          y={y}
          fill="#000"
          fillOpacity={'0.45'}
          fontSize="12"
        >
          {node.yAxis}
        </text>
      })}
    </g>
  )
}

export default Index