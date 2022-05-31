import { NextApiRequest, NextApiResponse } from "next";
import { Controller, install } from "nextjs-backend-helpers/controller";

export class HealthController extends Controller {
  async get(req: NextApiRequest, res: NextApiResponse) {
    return res.json({
      alive: true
    })
  }
}

export default install(HealthController)
