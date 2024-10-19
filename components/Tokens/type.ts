export type TPost = {
  ID: number;
  amm_address: string;
  author_id: number;
  author_photo: string;
  author_username: string;
  comment_count: number;
  content: string;
  created_at: string;
  jetton_address: string;
  jetton_image: string;
  jetton_name: string;
  like_count: number;
  updated_at: string;
  wallet_address: string;
};

export type TComment = {
  ID: number;
  author_id: number;
  author_photo: string;
  author_username: string;
  content: string;
  created_at: string;
  updated_at: string;
};
