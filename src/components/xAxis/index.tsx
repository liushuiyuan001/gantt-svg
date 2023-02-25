import { FC } from 'react';
import './index.css'
import { startIndex, CHART_WIDTH, columnWidth, XAXIS_ARR } from '../../constant'

type Props = {
}

const Index:  FC<Props> = ({ }) => {

  const renderLine = () => {
    return (
      <svg>
        <line 
          x1={startIndex[0]}
          y1={startIndex[1]}
          x2={startIndex[0] + CHART_WIDTH}
          y2={startIndex[1]}
          strokeWidth="1" 
          strokeOpacity="0.4" 
          stroke="black"
        />
        {
          XAXIS_ARR.map((_,i) => {
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
          XAXIS_ARR.map((axis, index) => {
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
        width={CHART_WIDTH + 146} 
        height="63"
      >
        {renderLine()}
        {renderXAxis()}
      </svg>
    </div>
  )
}


export default Index;