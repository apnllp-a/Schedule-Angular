export interface ShiftSwap {
    // _id?: string;
    requester: Userx;
    requesterDate: Date;
    requesterShiftType: string;
    requestee: Userx;
    requesteeDate: Date;
    requesteeShiftType: string;
    details: string;
    approvers: Approver[];
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface Approver {
    role: string;
    user: string;
    status: string;
    date?: Date;
  }

  export interface Userx {
    // _id?:string;
    username: string;
    firstName: string;
    lastName: string;
    password?: string;  // Optional because you might not want to send the password to the frontend
    email?: string;
    department: string;
    role: 'IT' | 'HR' | 'Board' | 'Head' | 'Employee';
    status: 'active' | 'pending' | 'disabled' | 'inactive';
    createdAt: Date;
    updatedAt: Date;
}

