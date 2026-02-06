export default function sitemap() {
  const baseUrl = "https://gurukulavidyamandira.edu.in";
  
  // Current date for lastModified
  const currentDate = new Date().toISOString();

  // Define all pages with their priorities and change frequencies
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/admissions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/academics`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/facilities`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/activities`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calendar`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/visit-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return routes;
}
