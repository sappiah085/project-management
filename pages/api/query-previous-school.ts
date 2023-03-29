import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function previousSchool(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const body = JSON.stringify({
      query: `
      query { 
        student(id:"${req.query._id}") {
          previousSchool {
            schoolName,
            city,
            country,
            levelCompleted,
            reason,
            dateLeft
          }
        }
      }
      `,
    });
    const previousSchool = await fetchData(
      `${url.student}/student-graphql`,
      body,
      req.headers.cookie || ""
    );
    res.status(200).json(previousSchool);
  }
}
