import { createServer } from "@ponder/core";
import { NextApiRequest, NextApiResponse } from "next";

// This assumes your ponder config and schema are in the same directory
import config from "../ponder.config";
import schema from "../ponder.schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const server = createServer({ config, schema });
  await server.start();
  await server.handle(req, res);
}
