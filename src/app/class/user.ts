import { LocalDate } from '../interface/localDate';

export class User {
    private _name: string;
    private _family: string;
    private _itemNum: number;
    private _birthday: LocalDate;
  
    constructor(name: string, family: string, itemNum?: number, birthday?: LocalDate) {
      this._name = name;
      this._family = family;
      this._itemNum = itemNum;
      this._birthday = birthday;
    }
  
    get name(): string {
      return this._name;
    }
  
    get family(): string {
      return this._family;
    }
  
    get itemNum(): number {
      return this._itemNum;
    }
  
    get birthday(): LocalDate {
      return this._birthday;
    }
  }
  