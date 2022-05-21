import {ThemeContext, UserContext} from '../../context';

export const  WithTheme = InnerComponent => props =>{
  return(
    <ThemeContext.Consumer>{
      ([theme,setTheme])=>(<InnerComponent theme={theme} setTheme={setTheme}/>)
    }</ThemeContext.Consumer>
  );
}

export const WithUser = InnerComponent => (props) => {
  return(
    <UserContext.Consumer>{
      (user)=>(<InnerComponent user={user}/>)
    }</UserContext.Consumer>
  )
}