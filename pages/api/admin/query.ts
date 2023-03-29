import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function query(req: NextApiRequest, res: NextApiResponse) {
  const data = await fetchData(
    `${url.student}/student-graphql`,
    JSON.stringify(req.body),
    req.headers.cookie || ""
  );
  res.status(200).json(data);
}
