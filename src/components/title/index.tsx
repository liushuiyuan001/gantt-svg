import { FC } from 'react';
import './index.css'

type Props = {
  title: string;
}

const Title:  FC<Props> = ({ title }) => {
  return (
    <div className="gantt-title">
      {title}
    </div>
  )
}


export default Title;