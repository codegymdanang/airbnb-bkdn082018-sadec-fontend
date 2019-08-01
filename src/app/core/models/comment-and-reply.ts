import { Home } from './home';
import { User } from './user';

export class CommentAndReply {
    id: number
    nguoiDung: User
    ngoiNha: Home
    noiDung: string
    nhanXet: CommentAndReply
}
