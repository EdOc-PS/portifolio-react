import { connectDB } from "../../lib/mongoose.js";
import Project from "../../models/Project.ts";

export default async function handler(
  req: any,
  res: any
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método não permitido" });
  }

  const { id } = req.query;

  try {
    await connectDB();

    const project = await Project.findById(id);

    return res.status(200).json({
      success: true,
      project,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Erro ao buscar projeto",
    });
  }
}