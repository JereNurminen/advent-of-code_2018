import { getData } from "./util"
import * as R from "ramda"

const reducer = (acc: any, value: any) => value + acc

const parseRow = (row: string): number => parseInt(row, 10)

const dataToArray = (data: string): ReadonlyArray<string> => R.init(data.split("\n"))

const main = async (): Promise<void> => {
  const input = await getData("1-1")
  const output = R.pipe(
    dataToArray,
    R.map(parseRow),
    R.reduce(reducer, 0)
  )(input)

  console.log(output)
}

main()
