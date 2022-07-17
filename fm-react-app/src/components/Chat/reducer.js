const reducer = (state,action) => {
  const {type,data:{autors,messages}} = action;
  switch(type){
    case 'DATA_RESPONSE_SUCCESS':{
      const autorsMap = new Map();
      autors.forEach(autor=>autorsMap.set(autor.id, autor));

      const messagesWithAutors = messages.map(message=>{
        const messageWithAutor = {
          ...message,
          autor:autorsMap.get(message.autorId)
        }
        return messageWithAutor;
      });
      const newState = {
        ...state,
        autors,
        messages:messagesWithAutors,
      }
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;