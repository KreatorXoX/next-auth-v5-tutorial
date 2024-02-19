type Category = {
  category_link: string;
  node_id: string;
  name: string;
  level: number;
};

type BSR = {
  node_id: string;
  name: string;
  rank: number;
  level: number;
};

type ImageUrls = string[];

type ProductAttributes = {
  asin: string;
  title: string;
  image_urls: ImageUrls;
  brand: string;
  category: Category[];
  bsr: BSR[];
  date_first_available: string;
  description: string;
  key_points: string[];
  manufacturer: string;
  url: string;
  number_of_sellers: number;
};

type PointsMonetaryValue = {
  currency_code: string;
};

type Points = {
  points_monetary_value: PointsMonetaryValue;
};

type PriceDetails = {
  landed_price_new: number;
  listing_price_new: number;
  points_new: Points;
  points_used: Points;
  currency_code: string;
};

type FeeDetails = {
  referral_fee: number;
  fba_fee: number;
};

type ProductPotential = {
  sales_estimate_low: number;
  sales_estimate_high: number;
  revenue_estimate_low: number;
  revenue_estimate_high: number;
};

type PackageDimensions = {
  height: number;
  length: number;
  weight: number;
  width: number;
  length_unit: string;
  weight_unit: string;
};

type ProductSpecifications = {
  gtin_code: string;
  upc_code: string | null;
  is_adult_product: boolean;
  model_number: string;
  part_number: string;
  parent_asins: string[] | null;
  number_of_items: number;
  package_dimensions: PackageDimensions;
};

type Ratings = {
  ratings: number;
  number_of_ratings: number;
};

type Product = {
  product_attributes: ProductAttributes;
  price_details: PriceDetails;
  fee_details: FeeDetails;
  product_potential: ProductPotential;
  product_specifications: ProductSpecifications;
  ratings: Ratings;
};
