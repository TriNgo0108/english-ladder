import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    // absoluteUrl always adds a trailing slash; a file URL must not have one.
    sitemap: absoluteUrl("/sitemap.xml").replace(/\/$/, ""),
  };
}
