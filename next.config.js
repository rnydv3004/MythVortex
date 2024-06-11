/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    NODEMAILER_EMAIL: 'support@mythvortex.com',
    NODEMAILER_PW: 'ajpe kwxa tstd kpvh',
    DB_URL: "https://mythvortex-default-rtdb.firebaseio.com",
    SPREADSHEET_ID: '1bhTNq-8KAr2AOwnEOCsLafqmhQHC4USycpA221ktFus',
    USER_DETAILS_ID: "admin",
    USER_PASSWORD: "Admin24680#",
    
    // Calender
    SCOPES: "https://www.googleapis.com/auth/calendar",
    GOOGLE_PRIVATE_KEY:
      "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDCsUYoGEuoNPCw\nXKNQRoDZnv55Lbsq8NlBJnUb2unuuqXcsRODkTzZO0o8Kdlk6BAwc8iLJN5PGeH6\n0FIz0QcKRFF1u/fBTIdKqEHbv6C87gokO1xlkKePkOyYx9pPq4tVy+bP1202nVea\ns5y5QPmsFVM9Jj891VfqW7VP4xN6t/gZp4LKiOIrqbNXIb7qLGWB7IK+RMlHNd4/\nE/DvNGZTwccPisG5/lxubFH8/OFP5OW0uEX90LtWddSoiCWh+Xayf23+JYbk2vAW\n8U/JdjlJ5d6Xl3kiAP9+9ZTYVx73PgcGf3fBHoShu+HqVoHOcNOFtVs2cF1Zg0XO\nlfcMjEfJAgMBAAECgf8R1sRQDAUm6K96aFETmGxq4GhM2WZpF1gztVakXSWBEHil\ng3Vibu7rMqMe73lEZvFf5Y3qUKjXWt+pN8DtdEZvJ9URgWJ48z/ptSoBu/mXJkmI\nc923gbo/FyY3DLXX+6T+dBem5EHRk7z8jaoLIwUgcbh3Ua6Fs1ll8qNa+nlxbsdy\nkifAwglixXq350CevWUEtWHQHOXHeCrGggxTv031XWa4OcM3X3EObMeRZeMR89+F\nRQt6SOANH90WOvvmCYvJ85a5zFrd87Q90eScRZq8yRF8H4i63FLZtxYcXG8b66UV\nnF/q3eIblUl+vZSTqE52hoM7lYL4lnJb3uo4FKECgYEA/dBy8BnchH5wt6wPWEh0\nHzHqY2gIch3/IqEEJhhLy4qMK2JwDY3LplPOv6b9+u3+EN2IFvK1I0ctnEmyyKfs\n9PoFmaLMRjue7lsuM0VGSTN3/AjqRkHiO7IeJVG7/oxJR3DB/QumldISzj8CABot\nWWkVX1sFM8qDLsNPlAnArXkCgYEAxF58rpZDV+yByzazsoSOPfb9pIFBIwspRuWZ\nqqke5omW0P7YiuXIN0JOdIvdDLXLzXT4UaslIVzPR2rLbDsLZrJIFqtOVLioCokw\nMyP703bofiXaI2q1lx1ci5TuT0XM1YEfrS93/4h4NAeTtd1SrxyH8trWLbkimhU7\n55QR6NECgYA6q212HLRBmCyb+FTPtmfJMjOY6NpS7qYkLg4UdDdJBGykNqvqJiW1\n+9dlq8c3sr2wzlR/4XiHgBOF9e8yvMZkVkrnGZ+YeH2jYUZLqa62iwQoKTNmLCKM\nY/7d54fKLkleDy14PbIzHY0lSaE/vs1OxqCfGx4Xu68ZJyKE+MAmGQKBgQC2icLL\nJCFbxR1uQt5OLwxuq39igUiEg+aN4fazftybnwDULGIs06cHPxrhGfaUzxWxWm9O\ns5Ijbju8fpi0djqF72o1sG5zMOf8S0TD9Uota5Z5VURusc41t/SESCAzDoZ3Xb2N\nZtfccQaUDwsO/rrSzunNJgH8pOF2bBCwl6MCUQKBgQDHksArY3Gpd8lsZjSlub1c\n4m+fR6BvCZ+HUsdOkbLskxeIHXkJIIWMBHjQ/jInOliKSMuk6fLUL5wgCec4LZMf\nQz7A3sBsONtYsTkFNZHRdg27TIhWw74blK+otB9ZTysExAW6gMqQZ/TOEBtq2EMc\nnH+w9t2+JVm7jsB/V0f9Fg==\n-----END PRIVATE KEY-----\n",
    GOOGLE_CLIENT_EMAIL: "mythvortex@mythvortex.iam.gserviceaccount.com",
    GOOGLE_PROJECT_NUMBER: "401410622035",
    GOOGLE_CALENDAR_ID:
      "f98828d72d7f6ef87babe0d8e0bfa6473fdcca63a0f013c84e6b35790f76f96e@group.calendar.google.com",
    CLIENT_ID: "113614384532075974708",
    PRIVATE_KEY_ID: "c9c55ce9437143c009e49047744277edb94781a4"
  },
};

module.exports = nextConfig;
