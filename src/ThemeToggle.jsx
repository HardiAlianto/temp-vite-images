import {FaMoon, FaSun} from 'react-icons/fa';
import { useAppGlobalContext } from './AppContext';

const ThemeToggle = () => {
  const {isDarkTheme, toggleDarkTheme, appGlobalContextRef} = useAppGlobalContext();
 
  return (
    <section className='toggle-container' ref={appGlobalContextRef}>
      <button type='button' className='toggle-icon dark-toggle' onClick={toggleDarkTheme}>
        {
          isDarkTheme? <FaSun/> : <FaMoon/>
        }
      </button>
    </section>
  )
}
export default ThemeToggle