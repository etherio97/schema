import Reference from "./Reference";
interface Field {
    name: String;
    required?: Boolean;
    default?: null | Number | String | Boolean;
    ref?: Reference;
}
interface Collection {
    fields: Field[];
}
interface Options {
    timestamps?: Boolean;
    timestamp?: Boolean;
}
export default class Schema {
    fields: Collection;
    options: Options;
    constructor(fields: Collection, options: Options);
}
export {};
