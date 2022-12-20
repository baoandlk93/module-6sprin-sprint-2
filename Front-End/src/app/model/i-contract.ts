import {IUser} from "./i-user";
import {ICustomerType} from "./i-customer-type";

export interface IContract{
    id?: number;
    carId?: number;
    startDate?: string;
    customerId:number;
    description: string;
    status: string;
    carName?: string;
    year?: number;
    brandName?: string;
    color?: string;
    price?: number;
    designs?: string;
    numberOfSeat?: number;
    picture?: string;
    gearName?: string;
    quantity?: number;
    numberOfMileTraveled?: number;
    driveShaft?: string;
    engineDisplacement?: string
    fuel?: string;
    customerName?: string;
    dayOfBirth?: string;
    gender?: number;
    idCard?: string;
    email?: string;
    address?: string;
    phoneNumber?: string;
    user?: IUser;
    customerType?: ICustomerType;
}
