import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


  async rewrites() {
    return [
      { source: "/", destination: "/home", },
      { source: "/home", destination: "/index.html", },
      { source: "/about", destination: "/pages/about.html", },
      { source: "/blockbee-invoice", destination: "/pages/blockbee-invoice.html", },
      { source: "/btcpay-invoice", destination: "/pages/btcpay-invoice.html", },
      { source: "/bot", destination: "/pages/bot.html", },
      { source: "/login", destination: "/pages/bot.html", },
      { source: "/cart", destination: "/pages/cart.html", },
      { source: "/checkout", destination: "/pages/checkout.html", },
      { source: "/checkout/order-pay", destination: "/pages/order-pay.html", },
      { source: "/funding", destination: "/pages/funding.html", },
      { source: "/shop", destination: "/pages/shop.html", },
      { source: "/steam", destination: "/pages/steam.html", },
      { source: "/smashfx-controller", destination: "/controller-dashboard/controller.html", },
    ];
  },

};

export default nextConfig;
