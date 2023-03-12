export type HighlightPoint = {
  time: string
}

export type GanttNode = {
  id: string,
  name: string,
  yAxis: string,
  url: string,
  value: {
    startTime: string,
    endTime: string,
  },
  averageValue: number, // 毫秒
  highlightPoints: HighlightPoint[],
}

export type GanttData = {
  title?: string,
  showPercent?: number,
  showStartPercent?: number,
  showDate?: string,
  nodes: GanttNode[],
}

export type GanttOptionsType = {
  rowHeight: number,
  columnWidth: number,
  chartWidth: number,
}