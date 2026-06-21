// gemini
import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT } from '@/data/model/knowledge';
import { GoogleGenAI } from '@google/genai';


const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenAI({ apiKey: API_KEY });

export async function POST(req: Request) {
    const { message } = await req.json();

    try {
        const client = new GoogleGenAI({ apiKey: API_KEY });

        const response = await genAI.models.generateContent({
            model: 'gemini-3.1-flash-lite', 
            contents: message,         
            config: {
                systemInstruction: SYSTEM_PROMPT, 
                temperature: 0.7, 
            }
        });
        const responseText = response.text;

        return NextResponse.json({ reply: responseText });

    } catch (error) {
        console.error('Gagal mengirim pesan ke AI:', error);
        return NextResponse.json({ error: 'Gagal terhubung ke server.' }, { status: 500 });
    }
}


// open ai

// import OpenAI from 'openai';
// import { NextResponse } from 'next/server';
// import { SYSTEM_PROMPT } from '@/data/model/knowledge';

// // 1. Arahkan client ke server Groq
// const client = new OpenAI({
//   apiKey: process.env.GROQ_API_KEY, 
//   baseURL: 'https://api.groq.com/openai/v1', // URL diganti ke Groq
// });

// export async function POST(req: Request) {
//     const { message } = await req.json();

//     try {
//         // 2. Format penulisan yang benar: chat.completions.create
//         const response: any = await client.chat.completions.create({
//             model: 'llama-3.1-8b-instant', 
//             messages: [              
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: message }
//             ],
//             temperature: 0.7,
//         });

//         // 3. Ambil data dengan benar
//         const responseText = response.choices[0].message.content;
//         return NextResponse.json({ reply: responseText });
        
//     } catch (error) {
//         console.error('gagal coyyy, cek errornya:', error);
//         return NextResponse.json({ error: 'gagal buat konek ke ai' }, { status: 500 });
//     }
// }