export interface IFuncResultModel<DataType, ErrorType = Error> {
  value: DataType
  error: ErrorType | null
}
