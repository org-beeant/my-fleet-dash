import _ from "lodash";
import { challanHistoryData, FCHistoryData, FHHistoryData, historyData } from "./history";
import { ChallanHistory, FCHistory, FHHistory, History } from "./definitions";

export async function fetchHistoricalData(page: number = 1, size: number = 5) {
  //Calculate the starting and  ending index
  let startingIndex = (page - 1) * size;
  let endingIndex = startingIndex + 1 + size;

  let slicedData = _.slice(historyData, startingIndex, endingIndex - 1);

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

export async function fetchAllChallanHistoryData(page: number = 1, size: number = 5) {
  //Calculate the starting and  ending index
  let startingIndex = (page - 1) * size;
  let endingIndex = startingIndex + 1 + size;

  let slicedData = _.slice(challanHistoryData, startingIndex, endingIndex - 1);

  //Plug the type
  const returnResult: ChallanHistory[] = slicedData.map((item: any) => ({
    ...item,
  }));

  return {
    totalRows: challanHistoryData.length,
    data: returnResult,
    page: page,
    size: size,
  }; // Return the sliced data and the total number of rows
}

export async function fetchAllFCHistoryData(page: number = 1, size: number = 5) {
  //Calculate the starting and  ending index
  let startingIndex = (page - 1) * size;
  let endingIndex = startingIndex + 1 + size;

  let slicedData = _.slice(FCHistoryData, startingIndex, endingIndex - 1);

  //Plug the type
  const returnResult: FCHistory[] = slicedData.map((item: any) => ({
    ...item,
  }));

  return {
    totalRows: FCHistoryData.length,
    data: returnResult,
    page: page,
    size: size,
  }; // Return the sliced data and the total number of rows
}

export async function fetchAllFHHistoryData(page: number = 1, size: number = 5) {
  //Calculate the starting and  ending index
  let startingIndex = (page - 1) * size;
  let endingIndex = startingIndex + 1 + size;

  let slicedData = _.slice(FHHistoryData, startingIndex, endingIndex - 1);

  //Plug the type
  const returnResult: FHHistory[] = slicedData.map((item: any) => ({
    ...item,
  }));

  return {
    totalRows: FHHistoryData.length,
    data: returnResult,
    page: page,
    size: size,
  }; // Return the sliced data and the total number of rows
}