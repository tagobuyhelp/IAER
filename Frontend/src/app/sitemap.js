import { navigationData } from "@/lib/navigation";

export default function sitemap() {
  const baseUrl = "https://iaer.in";
  
  // Base static routes not in navigation or top-level
  const staticRoutes = [
    "",
    "/contact",
    "/mandatory-disclosure",
  ];

  const routes = new Set(staticRoutes);

  // Helper to extract URLs from navigation items
  const extractUrls = (items) => {
    items.forEach((item) => {
      if (item.href && !item.href.startsWith("http")) {
        // Remove anchor tags for sitemap
        const cleanPath = item.href.split("#")[0];
        if (cleanPath) routes.add(cleanPath);
      }
      
      if (item.items) {
        extractUrls(item.items);
      }
      if (item.subItems) {
        extractUrls(item.subItems);
      }
    });
  };

  extractUrls(navigationData);

  return Array.from(routes).map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
