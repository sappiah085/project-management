import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function updateStudent(req: NextApiRequest, res: NextApiResponse) {
  await fetchData(`${url.student}/${req.query.id}`, JSON.stringify(req.body), req.headers.cookie || "", "PATCH");
  res.status(200).json({ status: "success" });
}
