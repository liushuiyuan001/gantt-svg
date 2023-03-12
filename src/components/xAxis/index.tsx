import { FC } from 'react';
import './index.css'
import { GanttOptionsType } from '../../types'
import { startIndex } from '../../constant'

type Props = {
  options: GanttOptionsType,
  xAxisArr: string[],
}

const Index:  FC<Props> = ({ options, xAxisArr }) => {

  const { chartWidth, columnWidth } = options;
  const renderLine = () => {
    return (
      <svg>
        <line 
          x1={startIndex[0]}
          y1={startIndex[1]}
          x2={startIndex[0] + chartWidth}
          y2={startIndex[1]}
          strokeWidth="1" 
          strokeOpacity="0.4" 
          stroke="black"
        />
        {
          xAxisArr.map((_,i) => {
            if(i % 2 !== 0) {
              return null;
            }
            return (
              <line 
                key={i}
                x1={startIndex[0] + columnWidth * i }
                y1={startIndex[1]}
                x2={startIndex[0] + columnWidth * i}
                y2={startIndex[1] + 5}
                strokeWidth="1"
                strokeOpacity="0.4"
                stroke="black"
              />
            )
          })

        }
      </svg>
    )
  }

  const renderXAxis = () => {
    return (
      <svg>
        {
          xAxisArr.map((axis, index) => {
            if(index % 2 !== 0) {
              return null;
            }
            return (
              <text
                x={startIndex[0] + columnWidth * index - 10}
                y="25"
                fill="#000"
                fillOpacity="0.45"
                fontSize="12"
                key={index}
              >
                {axis}
              </text>
            )
          })
        }
      </svg>
    )
  }

  return (
    <div className="x-axis">
      <svg
        width={chartWidth + 146} 
        height="63"
      >
        {renderLine()}
        {renderXAxis()}
      </svg>
    </div>
  )
}


export default Index;