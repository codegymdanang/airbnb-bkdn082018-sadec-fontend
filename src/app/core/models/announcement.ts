import { User } from './user';
import { Home } from './home';
import { CommentAndReply } from './comment-and-reply';

export class Announcement {
    id: number
    noiDung: string
    tinhTrang: boolean
    nguoiDung: User
    ngoiNha: Home
    nhanXet: CommentAndReply
    url: string
}
