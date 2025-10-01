import { OpenAI } from "@langchain/openai";
import dotenv from "dotenv";
dotenv.config()

const llm = new OpenAI({
    model: "gpt-3.5-turbo-instruct",
    apiKey: process.env.OPENAI_API_KEYS,
})

const result = await llm.invoke("What is india capital")

console.log(result)