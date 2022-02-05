import type { NextApiRequest, NextApiResponse } from "next";

import { getTotalSupply } from "../../utils/services/pickleContract";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { SECRET } = process.env;

  try {
    const secret = req.headers.authorization!.split(" ")[1];

    if (secret === SECRET) {
      const totalSupply = await getTotalSupply();
      res.status(200).json({ totalSupply });
    } else {
      res.status(401).send({ error: "Incorrect secret." });
    }
  } catch (err) {
    res.status(500).end();
  }
};

export default handler;
