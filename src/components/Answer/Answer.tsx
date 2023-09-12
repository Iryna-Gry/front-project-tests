import React from 'react'
import css from './Answer.module.css'

export const Answer: React.FC = () => {
  return (
    <div className={css.Answer}>
      <div className={css.Answer_number}>1.</div>
      <div className={css.Answer_text}>Open test</div>
    </div>
  )
}
