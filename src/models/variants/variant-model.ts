import { discountTypeEnum } from "../product/product-model";

export interface variantInterface {
  id: string;
  title: string;
  discountAmount: number | undefined;
  discountType: discountTypeEnum | undefined;
}

export const transformToVariantInterface = (data: any): variantInterface => {
  return {
    id: data.id,
    title: data.title,
    discountAmount: data.discountAmount ?? undefined,
    discountType: data.discountType ?? discountTypeEnum.FLAT,
  };
};
