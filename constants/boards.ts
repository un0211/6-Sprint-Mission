import Device from "./Device";

export const IMAGE_DOMAIN_ALLOWED =
  "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com";

export const NUM_BEST_ARTICLES = {
  [Device.Mobile]: 1,
  [Device.Tablet]: 2,
  [Device.PC]: 3,
};

export enum Order {
  Recent = "recent",
  Like = "like",
}

export const ORDER_MESSAGE = {
  [Order.Recent]: "최신순",
  [Order.Like]: "좋아요순",
};
