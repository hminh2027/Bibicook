export type Broker = {
  email?: string;
  phoneNumber: string;
  name: string;
  id?: string;
  role?: number;
  password?: string;
  avatar: string;
  posts: Post[];
};
export type Media = {
  id: number;
  index: number;
  name: string;
  type: MediaType;
  url: string;
  postId: number;
};
export type PostAttribute = {
  attribute: {
    name: string;
    id: number | string;
  };
  attributeId: number | string;
  postId: number;
  value: string;
};
export type PostType = {
  id: number;
  name: string;
};

export type Post = {
  id?: number;
  slug: string;

  title: string;
  description: string;

  isApproved: false;
  isPublished: false;

  duration: number;

  province: string;
  district: string;
  commune: string;
  street: string;

  broker: Broker;

  name: string;
  attributes: PostAttribute[];

  size: number;
  postType: PostType;
  price: string;
  status: PostStatus;

  medias: Media[];

  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
  expiredAt?: Date;
};
export enum PostStatus {
  "PENDING" = "PENDING",
  "DRAFTING" = "DRAFTING",
  "PUBLISHED" = "PUBLISHED",
  "REJECTED" = "REJECTED",
}
export enum MediaType {
  "PANO" = "PANO",
  "NORMAL" = "NORMAL",
}
