import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'

export const AuthNav: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <NavLink className={css.link} to='/register'>
        Register
      </NavLink>
      <NavLink className={css.link} to='/login'>
        Log In
      </NavLink>
    </div>
  )
}
