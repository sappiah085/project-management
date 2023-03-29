import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createStudent(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const student = await fetchData(url.student, JSON.stringify(req.body), req.headers.cookie || "");
    res.status(201).json(student);
  }
}
