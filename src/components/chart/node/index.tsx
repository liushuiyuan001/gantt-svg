import { FC } from 'react'
import { GanttNode, GanttOptionsType } from '../../../types'
import { NODE_ATTRIBUTE } from '../../../constant'

type Props = {
  node: GanttNode;
  index: number;
  options: GanttOptionsType,
}

const Index: FC<Props> = ({node, index, options }) => {

  const { rowHeight, columnWidth } = options;
  const startY = index * rowHeight;
  const startX = index * columnWidth;
  return (
    <g>
      <text
        x={startX}
        y={startY * 1 + NODE_ATTRIBUTE.name.y + 5}
        fontSize="12"
        // transform={`translate(${ resTransformX * -1 }, 0)`}
        fill="#666666"
      >
        {node.name}
      </text>
      <rect
          x={startX * 1}
          y={startY * 1 + NODE_ATTRIBUTE.value.y}
          width={columnWidth}
          height={NODE_ATTRIBUTE.value.height}
          fill={true ? "#52C41A" : "#FA8C16"}
      />
    </g>
  )
}

export default Index