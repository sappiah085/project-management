import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function QueryParent(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = JSON.stringify({
      query: `
      query { 
        student(id:"${req.query._id}") {
          ${req.query.name} {
            _id,
            name,
            number,
            email,
            address,
            religion,
            occupation,
            education
          }
        }
      }
      `,
    });
    const parent = await fetchData(`${url.student}/student-graphql`, body, req.headers.cookie || "");
    res.status(201).json(parent);
  }
}
