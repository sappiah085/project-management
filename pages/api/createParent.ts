import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function createParent(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const parent = await fetchData(url.parent, JSON.stringify(req.body), req.headers.cookie || "");
    res.status(201).json(parent);
  } else if (req.method === "PATCH") {
    const parent = await fetchData(
      `${url.parent}/${req.query.id}`,
      JSON.stringify(req.body),
      req.headers.cookie || "",
      "PATCH"
    );
    res.status(200).json(parent);
  }
}
