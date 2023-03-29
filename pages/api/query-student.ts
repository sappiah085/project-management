import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function queryStudent(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const student = await fetchData(
    `${url.student}/student-graphql`,
    JSON.stringify({
      query: `
            query {
            studentUncompleted {
            _id,
           name {
            surname,
            otherNames
           }
           DOB,
           class,
           nationality,
           religion
          }
        }
        `,
    }),
    req.headers.cookie || ""
  );
  res.status(200).json(student);
}
