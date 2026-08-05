export type MmjState = {
  code: string;
  name: string;
  timezone: string;
};

/** States available for medical marijuana certification via Heally. */
export const MMJ_STATES: MmjState[] = [
  { code: "AR", name: "Arkansas", timezone: "CST" },
  { code: "AZ", name: "Arizona", timezone: "MST" },
  { code: "CA", name: "California", timezone: "PST" },
  { code: "CO", name: "Colorado", timezone: "MST" },
  { code: "CT", name: "Connecticut", timezone: "EST" },
  { code: "DE", name: "Delaware", timezone: "EST" },
  { code: "FL", name: "Florida", timezone: "EST" },
  { code: "HI", name: "Hawaii", timezone: "HST" },
  { code: "IL", name: "Illinois", timezone: "CST" },
  { code: "LA", name: "Louisiana", timezone: "CST" },
  { code: "MA", name: "Massachusetts", timezone: "EST" },
  { code: "MD", name: "Maryland", timezone: "EST" },
  { code: "ME", name: "Maine", timezone: "EST" },
  { code: "MI", name: "Michigan", timezone: "EST" },
  { code: "MN", name: "Minnesota", timezone: "CST" },
  { code: "MO", name: "Missouri", timezone: "CST" },
  { code: "MT", name: "Montana", timezone: "MST" },
  { code: "ND", name: "North Dakota", timezone: "CST" },
  { code: "NH", name: "New Hampshire", timezone: "EST" },
  { code: "NJ", name: "New Jersey", timezone: "EST" },
  { code: "NM", name: "New Mexico", timezone: "MST" },
  { code: "NV", name: "Nevada", timezone: "PST" },
  { code: "NY", name: "New York", timezone: "EST" },
  { code: "OH", name: "Ohio", timezone: "EST" },
  { code: "OK", name: "Oklahoma", timezone: "CST" },
  { code: "OR", name: "Oregon", timezone: "PST" },
  { code: "PA", name: "Pennsylvania", timezone: "EST" },
  { code: "RI", name: "Rhode Island", timezone: "EST" },
  { code: "SD", name: "South Dakota", timezone: "CST" },
  { code: "UT", name: "Utah", timezone: "MST" },
  { code: "VT", name: "Vermont", timezone: "EST" },
  { code: "WA", name: "Washington", timezone: "PST" },
  { code: "WV", name: "West Virginia", timezone: "EST" },
];
