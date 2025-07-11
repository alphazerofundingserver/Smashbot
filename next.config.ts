import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


  async rewrites() {
    return [
      { source: "/", destination: "/home", },
      { source: "/home", destination: "/index.html", },
      { source: "/about", destination: "/pages/about.html", },
      { source: "/beepay", destination: "/pages/beepay.html", },
      { source: "/beepay", destination: "/pages/beepay.html", },
      { source: "/bot", destination: "/pages/bot.html", },
      { source: "/login", destination: "/pages/bot.html", },
      { source: "/cart", destination: "/pages/cart.html", },
      { source: "/checkout", destination: "/pages/checkout.html", },
      { source: "/code", destination: "/pages/code.html", },
      { source: "/funding", destination: "/pages/funding.html", },
      { source: "/shop", destination: "/pages/shop.html", },
      { source: "/steam", destination: "/pages/steam.html", },
      { source: "/wallet", destination: "/pages/wallet.html", },
      { source: "/smashfx-controller", destination: "/controller-dashboard/controller.html", },
    ];
  },

};

export default nextConfig;
