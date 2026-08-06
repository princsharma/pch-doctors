import { absoluteUrl } from "@/lib/seo";

export const SITE = {
  name: "PCH Doctors",
  url: absoluteUrl("/"),
  email: "contact@pchdoctors.com",
  phone: "+1 (424) 424-1618",
  phoneDisplay: "+1 (424) 424 – 1618",
  address: "910 W Pacific Coast Hwy Unit D, Wilmington, CA 90744",
  addressShort: "Wilmington, CA",
} as const;
