"use server";
export const getProducts = async (c1: string, c2: string, asins: string) => {
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

    return { result1, result2 };
  } catch (error) {
    console.log(error);
    return { message: "Error fetching products" };
  }
};
