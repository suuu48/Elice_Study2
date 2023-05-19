export interface PostTypes {
  id: number; //나중에 string으로 바꿔야할듭..
  title: string;
  user_nickname: string;
  profileImg: string;
  date: string;
  category: string;
  text: string;
}

export interface CommentTypes {
  id: number;
  text: string;
  date: string;
  postId: number;
  user_nickname: string;
}
