import * as fs from "fs"
import { promisify } from 'util'

const readFile = promisify(fs.readFile)

export const getData = async (file: string): Promise<string> => await readFile(`./input/${file}`, "utf8")

