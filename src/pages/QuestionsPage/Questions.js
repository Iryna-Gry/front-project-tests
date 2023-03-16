import React from 'react';
import { QuestionList, Section, Button } from 'components';
import css from './Questions.module.css';
export const Questions = () => {
  return (
    <>
      <div className={css.Question_section}>
        <Section>
          <div className={css.Question_wrapper}>
            <div className={css.Question_score}>Question 1/100</div>
            <QuestionList />
            <Button disabled={false}>Next question</Button>
          </div>
        </Section>
      </div>
    </>
  );
};
