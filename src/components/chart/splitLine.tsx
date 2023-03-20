import { FC, useMemo } from 'react';
import moment from 'moment'
import { GanttNode, GanttOptionsType } from '../../types'

type Props = {
  nodes: GanttNode[];
  showDate: string;
  endDate: string;
  options: GanttOptionsType,
}

const SplitLine:  FC<Props> = ({ nodes, options, showDate, endDate}) => {

  const { columnWidth, rowHeight } = options;

  const horizontalPosition = useMemo(() => {
    return nodes.map((node, index) => {
      return { 
        x1: 0,
        y1: rowHeight * index,
        x2: columnWidth * 48,
        y2: rowHeight * index
      }
    })
  },[nodes,rowHeight,columnWidth])

  const columnsNumber = () => {
    const end = moment(endDate)
    const start = moment(showDate)

    return end.diff(start,'h') * 2 + 1
  }

  const verticalPosition = useMemo(() => {
    const arr = new Array(columnsNumber())
    arr.fill(0)

    return arr.map((_,i) => {
      return {
        x1: columnWidth * i,
        y1: 0,
        x2: columnWidth * i,
        y2: rowHeight * nodes.length
      }
    })
  },[nodes,columnWidth,rowHeight])

  return (
    <g>
      {
        horizontalPosition.map((line,i) => {
          // 最后一个横线不用画
          if(i === horizontalPosition.length - 1) {
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