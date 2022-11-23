import DB from "@database";
// import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse} from "next";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB();
    const id = request.query.id
    const avo = await db.getById(id as string) // es una funcion async 

    response.status(200).json(avo)
}

export default allAvos