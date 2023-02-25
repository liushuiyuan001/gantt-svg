import { FC } from 'react';
import { GanttNode } from '../../types'
import { ROW_HEIGHT, columnWidth, XAXIS_ARR } from '../../constant'


type Props = {
  nodes: GanttNode[]
}

const SplitLine:  FC<Props> = ({ nodes }) => {

  const getHorizontalPosition = () => {
    return nodes.map((node, index) => {
      return { 
        x1: 0,
        y1: ROW_HEIGHT * index,
        x2: columnWidth * 48,
        y2: ROW_HEIGHT * index
      }
    })
  }

  const horizontalPosition = getHorizontalPosition()

  const getVerticalPosition = () => {
    const arr = new Array(XAXIS_ARR.length)
    arr.fill(0)

    return arr.map((_,i) => {
      return {
        x1: columnWidth * i,
        y1: 0,
        x2: columnWidth * i,
        y2: ROW_HEIGHT * nodes.length
      }
    })
  }

  const verticalPosition = getVerticalPosition()

  return (
    <g>
      {
        horizontalPosition.map((line,i) => {
          return (
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              key={i}
              strokeDasharray="5, 2" 
              strokeWidth="1" 
              strokeOpacity="0.09"
              stroke="black"
            />
          )
        })
      }
      {
        verticalPosition.map((line,i) => {
          if(i % 2 !== 0) {
            return null;
          }
          return (
            <line
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              key={i}
              strokeDasharray="5, 2" 
              strokeWidth="1" 
              strokeOpacity="0.09"
              stroke="black"
            />
          )
        })
      }
    </g>
  )
}


export default SplitLine;