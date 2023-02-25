import { FC } from 'react'
import { GanttNode } from '../../types'

type Props = {
  nodes: GanttNode[];
}

const Index: FC<Props> = ({ nodes = []}) => {
  return (
    <g>

    </g>
  )
}

export default Index