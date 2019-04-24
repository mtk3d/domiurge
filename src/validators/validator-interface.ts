export default interface ValidatorInterface {
  validate(data: object): boolean | string;
}
