import { User } from './user';
import { Image } from './image';
import { CommentAndReply } from './comment-and-reply';
export class Home {
    id: number
    chuNha: User
    tenNha: string
    soPhongNgu: number
    soPhongTam: number
    diaChi: string
    loaiNha: string
    giaTienTheoDem: number
    moTaChung: string
    tinhTrang: boolean
    hinhAnhNha: Image[]
    nhanXetVaPhanHoi: CommentAndReply[]
}
