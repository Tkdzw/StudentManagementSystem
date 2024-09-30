import { BasicAggregatedRoots } from "./AggregatedRoots/basic-aggregated-roots";

export interface StudentDto extends BasicAggregatedRoots{
    firstName:string;
    lastName:string;
    email:string;
    phoneNumber:string;
    age:number
}
