import {ICustomer} from "../model/i-customer";
import {Car} from "../model/i-car";

export interface IContractDto{
    id?: number;
    startDate?: string;
    customer?: ICustomer;
    car?: Car;
}
