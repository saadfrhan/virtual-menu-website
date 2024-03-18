export default async function sitemap() {
  let routes = [""].map((route) => ({
    url: `https://saadfarhan.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
