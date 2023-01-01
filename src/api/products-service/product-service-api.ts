export const getProducts = async (
  searchParam: string,
  pageNo: number
): Promise<any> => {
  let result;
  try {
    const response = await fetch(
      `https://stageapibc.monkcommerce.app/admin/shop/product?search=${searchParam}&page=${pageNo}`
    );
    result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
