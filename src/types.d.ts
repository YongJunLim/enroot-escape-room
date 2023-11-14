export type Puzzle = {
  name: string;
  category: string;
  urlPath: string;
  illustration: string;
  illustrationAlt: string;
  passcode?: number;
  id?: number;
};

export type passcodeTable = {
  passcode: number;
  id: number;
  puzzleName: string;
}

export type timingsTable = {
  submissionTime: number;
  id: number;
  puzzleName: string;
}