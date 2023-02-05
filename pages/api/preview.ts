import { NextApiRequest, NextApiResponse } from "next";

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setPreviewData({ a: 1 });
  res.writeHead(307, { Location: "/" });
  res.end();
}
