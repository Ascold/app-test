import {Album} from "./models/album.list";
import {User} from "./models/user";

export interface AppStore {
    albums: Album[];
    user: User;
}
