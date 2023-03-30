import { fetchData } from "@/utils/function";
import { url } from "@/utils/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getNotification(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const notifications = await fetchData(
      url.notification,
      undefined,
      req.headers.cookie || "",
      "GET"
    );
    res.status(200).json(notifications);
  } else if (req.method === "POST") {
    const notification = await fetchData(
      url.notification,
      JSON.stringify(req.body),
      req.headers.cookie || ""
    );
    res.status(201).json(notification);
  } else if (req.method === "PATCH") {
    const notification = await fetchData(
      `${url.notification}/?id=${req.query.id}`,
      "",
      req.headers.cookie || "",
      "PATCH"
    );
    res.status(201).json(notification);
  }
}
