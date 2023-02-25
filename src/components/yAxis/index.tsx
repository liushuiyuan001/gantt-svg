import { FC } from 'react'
import { GanttNode } from '../../types'
import { ROW_HEIGHT } from '../../constant'

type Props = {
  nodes: GanttNode[]
}

const Index: FC<Props> = ({ nodes }) => {

  return (
    <g>
      {nodes.map((node, index) => {
        const y = 54 + ROW_HEIGHT * index
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