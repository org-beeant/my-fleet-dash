import _ from "lodash";
import { historyData } from "./history";
import { History } from "./definitions";

export async function fetchHistoricalData(page: number = 1, size: number = 5) {
  console.log("Fetching Historical data");
  //Calculate the starting and  ending index
  let startingIndex = (page - 1) * size;
  let endingIndex = startingIndex + 1 + size;

  let slicedData = _.slice(historyData, startingIndex, endingIndex);

  //Plug the type
  const returnResult: History[] = slicedData.map((item: any) => ({
    ...item,
  }));

  return {
    totalRows: historyData.length,
    data: returnResult,
    page: page,
    size: size,
  }; // Return the sliced data and the total number of rows
}
