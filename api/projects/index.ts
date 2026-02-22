import { connectDB } from "../../lib/mongoose.js";
import Project from "../../models/Project";

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  try {
    await connectDB();

    const projects = await Project.find().select({
      title: 1,
      _id: 1,
    });

    return res.status(200).json({ success: true, projects });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Erro ao buscar projetos",
    });
  }
}