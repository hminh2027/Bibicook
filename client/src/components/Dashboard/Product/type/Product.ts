import { CategoryType } from "../../Category";
import { MediaType } from "../../Media";
import { AttributeType } from "../Attribute";

export interface ProductType {
  id: number;
  name: string;
  slug: string;
  medias: MediaType[];
  attributes: AttributeType[];
  shortDesc: string;
  longDesc: string;
  category: CategoryType;
}
