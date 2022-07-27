// chatConfig.js
// export const chatApiKey = "k78q4299muza";
import { StreamChat } from "stream-chat";
// import functions from "@react-native-firebase/functions";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

export const chatApiKey = "tkdnmgfq4yab";
export const chatSecretkey =
  "zqws7egxkd9e8eg8y7cc2mssxckbmekkqyamuzq9h4scpsm9a2krvuhj6xtzg3he";

// const chatClient = StreamChat.getInstance(chatApiKey, chatSecretkey);

// // const chatUserToken = chatClient.createToken(auth.currentUser.uid);

// export const chatUserId = auth.currentUser.uid;

// export const chatUserToken = chatClient.createToken(chatUserId);

export const chatUserId = "bryan";
export const chatUserToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYnJ5YW4ifQ.kH5OjHsjOyM8KXj2vJc2purLos31i4m48mdss8jt4tI";
export const chatUserName = "bryan";

// export const createChatToken = () => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState("");

//   useEffect(() => {
//     functions()
//       .httpsCallable("ext-auth-chat-getStreamUserToken")()
//       .then((response) => {
//         setProducts(response.data);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return null;
//   }

//   console.log("created token and token is :" + products);
// };
