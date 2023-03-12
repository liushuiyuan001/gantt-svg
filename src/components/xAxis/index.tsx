import { FC } from 'react';
import './index.css'
import { GanttOptionsType } from '../../types'

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
          x1={92}
          y1={0}
          x2={92 + chartWidth}
          y2={0}
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
                x1={92 + columnWidth * i }
                y1={0}
                x2={92 + columnWidth * i}
                y2={5}
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
                x={92 + columnWidth * index - 10}
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