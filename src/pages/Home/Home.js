import { Section, SignUpForm } from 'components';
import React from 'react';
import css from './Home.module.css';

export const Home = () => {
  return (
    <Section>
      <div className={css.Home_wrapper}>
        <div className={css.Title_wrapper}>
          <h1 className={css.Hero_title}>
            It’s time to <span>check </span>
            your <span>QA knowledge</span> here!
          </h1>
          <p>We made this platform so you can easily check how much you know</p>
          <div>Metrics</div>
        </div>
        <div className={css.Form_wrapper}>
          <SignUpForm />
        </div>
      </div>
    </Section>
  );
};
