export class User {
    full_name: string;
    bio: string;
    profile_picture: string;
    token: string;

    constructor(userData: any, token: string) {
        this.full_name = userData.full_name;
        this.bio = userData.bio;
        this.profile_picture = userData.profile_picture;
        this.token = token;
    }
}
