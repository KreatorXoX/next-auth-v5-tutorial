export async function POST(request: Request) {
  const res = await request.json();
  const c1 = res.country1;
  const c2 = res.country2;
  const asins = res.products;
  try {
    var myHeaders = new Headers();
    myHeaders.append("client-id", process.env.API_CLIENT_ID as string);
    myHeaders.append("token", process.env.API_TOKEN as string);
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
    };

    const response1 = await fetch(
      `https://api.sellerapp.com/sellmetricsv2/products?product_specifications=1&potential_detail=1&price_detail=1&fee_detail=1&ratings=1&realtime_data=1&geo=${c1}&productIds=${asins}`,
      requestOptions
    );
    const response2 = await fetch(
      `https://api.sellerapp.com/sellmetricsv2/products?product_specifications=1&potential_detail=1&price_detail=1&fee_detail=1&ratings=1&realtime_data=1&geo=${c2}&productIds=${asins}`,
      requestOptions
    );

    const result1 = await response1.json();
    const result2 = await response2.json();
    console.log(result1, result2);

    const formatedResult: TableProduct = {
      asin: result1[0].product_attributes.asin,
      img: result1[0].product_attributes.image_urls[0],
      title: result1[0].product_attributes.title,
      dimensions: {
        height:
          result1[0].product_specifications.package_dimensions.height ||
          result2[0].product_specifications.package_dimensions.height,
        length:
          result1[0].product_specifications.package_dimensions.length ||
          result2[0].product_specifications.package_dimensions.height,
        weight:
          result1[0].product_specifications.package_dimensions.weight ||
          result2[0].product_specifications.package_dimensions.weight,
        width:
          result1[0].product_specifications.package_dimensions.width ||
          result2[0].product_specifications.package_dimensions.width,
        length_unit:
          result1[0].product_specifications.package_dimensions.length_unit ||
          result2[0].product_specifications.package_dimensions.length_unit,
        weight_unit:
          result1[0].product_specifications.package_dimensions.weight_unit ||
          result2[0].product_specifications.package_dimensions.weight_unit,
      },
      seller_count: {
        c1: result1[0].product_attributes.number_of_sellers,
        c2: result2[0].product_attributes.number_of_sellers,
      },
      fba_fee: {
        c1: result1[0].fee_details.fba_fee,
        c2: result2[0].fee_details.fba_fee,
      },
      prices: {
        c1: {
          price: result1[0].price_details.listing_price_new,
          currency: result1[0].price_details.currency_code,
          country: c1,
        },
        c2: {
          price: result2[0].price_details.listing_price_new,
          currency: result2[0].price_details.currency_code,
          country: c2,
        },
      },
    };

    return Response.json(formatedResult);
  } catch (error) {
    console.log(error);
  }
}
