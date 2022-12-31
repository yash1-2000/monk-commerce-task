import {
  transformToVariantInterface,
  variantInterface,
} from "../variants/variant-model";

export interface productInterface {
  id: string;
  title: string;
  discountAmount: number | undefined;
  discountType: discountTypeEnum | undefined;
  variants: variantInterface[];
}
export enum discountTypeEnum {
  FLAT = "flat",
  PERCENTAGE = "%off",
}

export const transformToProductInterface = (data: any): productInterface => {
  return {
    id: data.id,
    title: data.title,
    discountAmount: data.discountAmount ?? undefined,
    discountType: data.discountType ?? discountTypeEnum.FLAT,
    variants: data.variants.map((variant: any) =>
      transformToVariantInterface(variant)
    ),
  };
};

