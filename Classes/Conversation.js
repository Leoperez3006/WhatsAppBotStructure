import axios from "axios";
import postConfig from "../Utils/axios.config.js";

// Conversation Class
export default class Conversation {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    startConversation(){
        let bodyParameters = { 
            "messaging_product": "whatsapp", 
            "to": `${this.phoneNumber}`, 
            "type": "template", 
            "template": { 
                    "name": "hello_world",
                    "language": 
                    {
                        "code":"en_US" 
                } 
            } 
        };

        fetch(postConfig.url, {
            method: "POST",
            body: JSON.stringify(bodyParameters),
            headers: postConfig.headers
            });

        // axios.post(
        //     postConfig.url,
        //     bodyParameters,
        //     postConfig.headers
        // ).then( response =>{
        //     // console.log(response)
        // })
    }
};


/**
 * curl -i -X POST `
  https://graph.facebook.com/v15.0/117239437983387/messages `
  -H 'Authorization: Bearer EAAMtIaSUTQoBAChMXWFGBzdQOSZC0Owbd2nsw82kN9dxt3yr9kZCRZBjW6xIhqLvPiZANyfFnj8dZBjJdJzWwyZC0qrC0BWt3POMBaa8nPSBIFiz3hGkLB5ZBVoLk4fbRwilPm6hYE5lo9IFyTZAKXq4ijxh3jxvwnuiU4HUR4ZCLZBBkySDnptVv4YqK8nrljEhiryugyrB2h4ni9eppDIopy' `
  -H 'Content-Type: application/json' `
  -d '{ \"messaging_product\": \"whatsapp\", \"to\": \"\", \"type\": \"template\", \"template\": { \"name\": \"hello_world\", \"language\": { \"code\": \"en_US\" } } }'
 * 
 */