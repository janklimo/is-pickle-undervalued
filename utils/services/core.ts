import { PickleModelJson } from "picklefinance-core/lib/model/PickleModelJson";

const endpoint = "https://api.pickle.finance/prod/protocol/pfcore";

interface Response {
  totalDill: number;
  pickleLocked: number;
}

export const getDillDetails = async (): Promise<Response> => {
  const response = await fetch(endpoint);
  const json: PickleModelJson = await response.json();
  const { totalDill, pickleLocked } = json.dill;

  return { totalDill, pickleLocked };
};
