import { absoluteUrl } from "@/lib/seo";

export const SITE = {
  name: "PCH Doctors",
  url: absoluteUrl("/"),
  email: "contact@pchdoctors.com",
  phone: "+1 (424) 424-1618",
  phoneDisplay: "+1 (424) 424 – 1618",
  address: "910 W Pacific Coast Hwy Unit D, Wilmington, CA 90744",
  addressShort: "Wilmington, CA",
  googleReviews:
    "https://www.google.com/search?q=PCH+Doctors+reviews&hl=en#lrd=0x80c2c4e2b8d5a5a5:0x1,1",
} as const;
