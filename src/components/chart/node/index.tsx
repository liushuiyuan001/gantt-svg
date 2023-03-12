import { FC, useMemo } from 'react'
import moment from 'moment'
import { GanttNode, GanttOptionsType } from '../../../types'
import { NODE_ATTRIBUTE } from '../../../constant'

type Props = {
  node: GanttNode;
  index: number;
  options: GanttOptionsType,
  showDate: string;
  endDate: string;
}

const Index: FC<Props> = ({ node, index, options, showDate, endDate }) => {

  const { rowHeight, columnWidth } = options;
  const startY = index * rowHeight;

  let startX = 0;
  if (moment(node.value.startTime).valueOf() > moment(showDate).valueOf()) {
    const startMillToDay = moment(node.value.startTime).valueOf() - moment(showDate).valueOf();
    const startHourPercent =  startMillToDay / 1000 / 60 / 60 / 24;
    startX = Number((startHourPercent * columnWidth * 48).toFixed(2));
  }
  
  /**
   * 计算块的宽度
   */
  const calValueWidth = useMemo(() => {

    let nodeStartTime = moment(node.value.startTime).valueOf();
    if (moment(node.value.startTime).valueOf() < moment(showDate).valueOf()) {
      nodeStartTime = moment(showDate).valueOf();
    }
    let nodeEndTime = moment(node.value.endTime).valueOf();
    if(moment(node.value.endTime).valueOf() > moment(endDate).valueOf()) {
      nodeEndTime = moment(endDate).valueOf()
    }

    const costMills = nodeEndTime.valueOf() - nodeStartTime;
    return (costMills / 1000 / 60 / 30 * columnWidth).toFixed(2);
  },[])

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
          width={calValueWidth}
          height={NODE_ATTRIBUTE.value.height}
          fill={true ? "#52C41A" : "#FA8C16"}
      />
    </g>
  )
}

export default Index