import dotenv from "dotenv";
dotenv.config();

let token = process.env.TOKEN;
export const postConfig = {
    url: "https://graph.facebook.com/v15.0/117239437983387/messages",
    headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type':'application/json'
 }
};


export default postConfig;