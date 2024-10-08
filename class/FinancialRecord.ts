import { Moment } from "moment";
import { Tag } from "./Tag";

export class FinancialRecord {
    constructor(
        public id: number,
        public name: string,
        public details: string,
        public value: number,
        public date: Moment,
        public type: string,
        public tags: Array<Tag>,
        public paid: boolean,
        public notification: boolean,
        public createdAt?: Moment,
        public updatedAt?: Moment,
    ) {}
}