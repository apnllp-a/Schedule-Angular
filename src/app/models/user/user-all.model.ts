export class UserAll {
    id?: any;
    username?: String;
    password?: String;
    firstName?: String;
    lastName?: String;
    email?: String;
    tal?: String;
    createdAt?: Date;
    departmentDetail?: {
        role?: String,
        salary?: String,
        department?: String,
    };
    status?: {
        role?: String,
        active?: boolean,
    };
    position?: String;
    published?: boolean;
}
