export class Tutorial {
  [x: string]: any;
  id?: any;
  username?: String;
  password?: String;
  firstname?: String;
  lastname?: String;
  departmentDetail?: {
    role?: String,
    salary?: String,
    department?: String,
  };
  status?: {
    role?: String,
    active?: boolean,
  };
  position?:String;
  createdAt?: Date;
  published?: boolean;
}