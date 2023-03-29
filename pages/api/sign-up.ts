import { url } from "@/utils/urls";
import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return;
  const data = await fetch(`${url.user}/sign-up`, {
    method: "post",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(req.body),
  });
  const info = await data.json();
  const cookie = serialize("session", info?.cookie, {
    expires: new Date(Date.now() + 3600000 * 1 - 1000),
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  res.setHeader("Set-Cookie", cookie);
  res.status(200).json(info);
}
