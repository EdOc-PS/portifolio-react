import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("portfolio");
        const projects = await db.collection("projects").find({}).toArray();

        console.log(projects);
        res.status(200).json(projects);

    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar projetos" });
    } finally {
        await client.close();
    }
}