import { getProducts } from "lib/shopify";
import { baseUrl, validateEnvironmentVariables } from "lib/utils";
import { MetadataRoute } from "next";

type Route = {
  url: string;
  lastModified: string;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables();

  const currentDate = new Date().toISOString();

  // Static pages that exist on the site
  const staticRoutes = [
    "",
    "/shop",
    "/how-to-play",
    "/about-us",
    "/reviews",
    "/custom-games",
    "/refund-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url: `${baseUrl}/product/${product.handle}`,
      lastModified: product.updatedAt,
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
  );

  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = await productsPromise;
  } catch (error) {
    console.error("Error fetching products for sitemap:", error);
    fetchedRoutes = [];
  }

  return [...staticRoutes, ...fetchedRoutes];
}
