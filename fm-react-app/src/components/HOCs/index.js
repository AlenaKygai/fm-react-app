import {ThemeContext} from '../../context';

export const  WithTheme = InnerComponent => props =>{
  return(
    <ThemeContext.Consumer>{
      ([theme,setTheme])=>(<InnerComponent theme={theme} setTheme={setTheme}/>)
    }</ThemeContext.Consumer>
  );
}
