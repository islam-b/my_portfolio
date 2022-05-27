
import * as emailjs from "@emailjs/browser"
import { string } from "yup"


const PUBLIC_KEY = "user_5nEIgvcp7iMSPwlWCO9kE"
const SERVICE_ID = "service_cg2aomg"
const TEMPLATE_ID = "template_vmtf10d"


export class EmailJs {

    static init() {
        emailjs.init(PUBLIC_KEY)
        console.log("EMAIL JS initialized")
    }

    static send(name: string, email: string, content: string) {
        return emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: name,
                from_email: email,
                message: content
            }
        )
    }
}