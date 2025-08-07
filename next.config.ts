import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:['*']
  },
  eslint:{
    ignoreDuringBuilds:true
  }
  /* config options here */
};

export default nextConfig;
