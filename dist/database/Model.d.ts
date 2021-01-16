import Schema from "./Schema";
export default class Model {
    static use(name: String, schema: Schema): void;
    static ref(model: Schema): void;
}
