import { NextApiRequest, NextApiResponse } from 'next'

export type Action = (...dependencies: any) => (req: NextApiRequest, res: NextApiResponse) => void | Promise<any>
