export type Glp1State = {
  code: string;
  name: string;
  timezone: string;
};

/** States available for GLP-1 / Ongo weight-loss scheduling. */
export const GLP1_STATES: Glp1State[] = [
  { code: "CO", name: "Colorado", timezone: "MST" },
  { code: "FL", name: "Florida", timezone: "EST" },
  { code: "GA", name: "Georgia", timezone: "EST" },
  { code: "IL", name: "Illinois", timezone: "CST" },
  { code: "LA", name: "Louisiana", timezone: "CST" },
  { code: "MO", name: "Missouri", timezone: "CST" },
  { code: "NY", name: "New York", timezone: "EST" },
  { code: "NC", name: "North Carolina", timezone: "EST" },
  { code: "OH", name: "Ohio", timezone: "EST" },
  { code: "OK", name: "Oklahoma", timezone: "CST" },
  { code: "PA", name: "Pennsylvania", timezone: "EST" },
  { code: "VA", name: "Virginia", timezone: "EST" },
];
