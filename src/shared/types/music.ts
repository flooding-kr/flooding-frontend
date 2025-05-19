export type OrderType = 'LATEST' | 'LIKES';

interface Proposer {
  name: string;
  school_number: string;
}

export interface Like {
  like_count: number;
  has_user_liked: boolean;
}

export interface Music {
  is_applied_by_user: boolean;
  is_liked_by_user: boolean;
  music_id: string;
  music_url: string;
  music_name: string;
  thumbnail_image_url: string;
  like_count: number;
  proposer: Proposer;
}
