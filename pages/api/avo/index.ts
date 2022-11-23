import DB from "@database";
import { IncomingMessage, ServerResponse } from "http";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
    const db = new DB();
    const allEntries = await db.getAll() // es una funcion async 
    const lenght = allEntries.length

    response.statusCode = 200; // como llega la info, esta ok
    response.setHeader('Content-type', 'application/json') // header de Node oara avisar al servidor que es de tipo JSON
    response.end(JSON.stringify({ data: allEntries, lenght}))
}

export default allAvos