import { createContext, useContext, useEffect, useRef, useState } from "react"

const AppGlobalContext = createContext();
export const useAppGlobalContext = ()=> useContext(AppGlobalContext);

const AppContext = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const appGlobalContextRef = useRef();
  
  console.log(`isDarkTheme = ${isDarkTheme}`);

  const loadThemeSettings = ()=>{
    let getTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
    console.log(`getTheme = ${getTheme}`);
    if(getTheme === null){
      getTheme = false;
    }
    setIsDarkTheme(getTheme);
  }

  const applyTheme = ()=>{
    const bodyElement = appGlobalContextRef.current.parentElement.parentElement.parentElement;
      
    isDarkTheme? bodyElement.classList.add('dark-theme') : bodyElement.classList.remove('dark-theme');
  }

  useEffect(()=>{
    loadThemeSettings();
  }, []);

  useEffect(()=>{
    applyTheme()
  }, [isDarkTheme]);

  // useEffect(()=>{
  //   queryClient.invalidateQueries({queryKey: ['unspphotos']});
  // }, [searchVal]);

    const toggleDarkTheme = ()=>{
      setIsDarkTheme(!isDarkTheme);
      applyTheme();

      localStorage.setItem('isDarkTheme', `${!isDarkTheme}`);
      
    }


  return (
    <AppGlobalContext.Provider value={{isDarkTheme, toggleDarkTheme, appGlobalContextRef, searchVal, setSearchVal}}>
        {children}
    </AppGlobalContext.Provider>
  )
}
export default AppContext