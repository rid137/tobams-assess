import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  images: {
    domains: ['media2.dev.to'], // Add the required domain for next/image
  },
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;