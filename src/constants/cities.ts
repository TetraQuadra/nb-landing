export type City = {
    slug: string;
    name: string;
    lat: number;
    lng: number;
    county: string;
};

/** Service areas from root layout keywords — used for SSG city pages */
export const CITIES: City[] = [
    { slug: "norwich", name: "Norwich", lat: 52.6309, lng: 1.2974, county: "Norfolk" },
    /** Approx. geographic centre of the county (Dereham area) */
    { slug: "norfolk", name: "Norfolk", lat: 52.681, lng: 0.94, county: "Norfolk" },
    { slug: "cringleford", name: "Cringleford", lat: 52.6047, lng: 1.2436, county: "Norfolk" },
    { slug: "taverham", name: "Taverham", lat: 52.6842, lng: 1.1895, county: "Norfolk" },
    { slug: "wymondham", name: "Wymondham", lat: 52.5754, lng: 1.1141, county: "Norfolk" },
    { slug: "costessey", name: "Costessey", lat: 52.6598, lng: 1.2163, county: "Norfolk" },
    { slug: "hethersett", name: "Hethersett", lat: 52.5978, lng: 1.1784, county: "Norfolk" },
    { slug: "mulbarton", name: "Mulbarton", lat: 52.5601, lng: 1.2337, county: "Norfolk" },
    { slug: "swardeston", name: "Swardeston", lat: 52.5789, lng: 1.2498, county: "Norfolk" },
    { slug: "bowthorpe", name: "Bowthorpe", lat: 52.6385, lng: 1.2189, county: "Norfolk" },
];

export function getCityBySlug(slug: string): City | undefined {
    return CITIES.find((city) => city.slug === slug);
}
