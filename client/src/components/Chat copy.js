// import { setContext } from '@apollo/client/link/context';
// import React, { useState, useEffect, useContext } from 'react';
// import { ApolloClient, InMemoryCache, useMutation, useSubscription, gql} from '@apollo/client';
// import { WebSocketLink } from "@apollo/client/link/ws";
// import { GET_MESSAGES } from '../utils/queries'

// const link = new WebSocketLink({
//   uri: `ws://localhost:3001/graphql`,
//   options: {
//     reconnect: true,
//   },
// });

// export const chatClient = new ApolloClient({
//   link, 
//   uri: 'http://localhost:3001/graphql',
//   cache: new InMemoryCache(),
// })

// const Messages = () => {
//   const { data } = useSubscription(GET_MESSAGES);
//   if (!data) {
//     return null;
//   }
//   return (
//     <div>
//       {data.messages.map(({ id, sender, text }) => {
//         return (
//           <div key={id} style={{ textAlign: 'right' }}>
//             <p>{sender}</p>
//             <p>{text} </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export function Chat() {
    
//   // const [message, setMessage] = useState("");
//   // const [messages, setMessages] = useState([]);

//   // useEffect(() => {
//   //   socket.on("message", message => {
//   //     setMessages(messages => [...messages, message]);
//   //   });
//   // }, []);

//   // const handleSubmit = event => {
//   //   event.preventDefault();
//   //   socket.emit("send", message);
//   //   setMessage("");
//   //   console.log(message)
//   // };

//   return (
//     <>
//         <div>
//         <div className='messageDisplay'>
//           <Messages />
//         </div>
//             <form>
//                 <label for="message-input">Message</label>
//                 <input type="textarea" id="message-input"/>
//                 <button type="submit" id="send-button">Send</button>

//                 {/* <label for="room-input">Room</label>
//                 <input type="text" id="room-input"/>
//                 <button type="button" id="room-button">Send</button> */}
//             </form>
//         </div>
//     </>
//   )
// }

// // module.exports = {Chat, chatClient}