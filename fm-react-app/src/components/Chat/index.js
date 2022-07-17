import React, { useReducer , useEffect} from 'react';
import { getChat } from '../../api';
import reducer from './reducer'


const Chat = () => {
  const [state,dispatch] = useReducer(reducer,{
    autors:[],
    messages:[],
  });

  useEffect(()=>{
    getChat()
    .then(data=>dispatch({
      type:'DATA_RESPONSE_SUCCESS',
      data,
    }))
    .catch(error=>console.log(error))
  },[]);

  return(
    <div>
      <h2>CHAT</h2>
      {
        state.messages.map((message)=>(
          <article key={message.id}>
          <h3>{message.autor.name}</h3>
          <p>{message.body}</p>
          </article>
        ))
      }
    </div>
  );
}

export default Chat;