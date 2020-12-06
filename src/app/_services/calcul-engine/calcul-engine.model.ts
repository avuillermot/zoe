import { IProduct } from "../product/product.model";
import { ICustomer } from '../customer/customer.model';
import * as moment from 'moment';

export interface IItemLine extends IProduct {
  code: string;
  name: string;
  quantity: number;
  total: number;
  totalFreeTax: number;
  taxAmount: number;
  order: number;
}

export interface IDocument {
  _id: string;
  number: string;
  total: number;
  totalFreeTax: number;
  taxAmount: number;
  items: IItemLine[];
  date: Date;
  customer: ICustomer;
  status: string;
  statusHistory: IStatus[];
}
export interface IQuote extends IDocument {
  expirationDate: Date;
}

export interface IStatus {
  _id: string;
  createdBy: string;
  created: Date;
  updatedBy: string;
  updated: Date;
  status: String;
}

export class DocumentHelper {
  public static formatDateUI(date: Date): string {
    return moment(date).format("DD/MM/yy");
  }
}
