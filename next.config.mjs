/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/neis/meal/:date/:code',
        destination: `https://open.neis.go.kr/hub/mealServiceDietInfo?Key=${process.env.NEXT_PUBLIC_NEIS_KEY}&Type=json&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MMEAL_SC_CODE=3&MLSV_YMD=:date&MMEAL_SC_CODE=:code`,
      },
    ];
  },
};

export default nextConfig;
