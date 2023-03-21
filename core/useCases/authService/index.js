import Repository from '../../repository/index.js'

class AuthService {
  /*get = async (name: string, options: { width?: string, height?: string }) => {
        const result: IFuncResultModel<NodeJS.ReadableStream | null> = {
            value: null,
            error: null,
        }
        const { value, error } = await Repository.S3.get(name)
        const transformer = sharp()
            // .resize(
            //     options.width ? parseInt(options.width) : undefined,
            //     options.height ? parseInt(options.height) : undefined
            // )
            // .webp()

        if(!value || error){
            result.error = new Error('Error')
            return result
        }
        if (value instanceof Readable) {
            result.value = value
        } else if (value instanceof Blob) {
            result.value = value.stream()
        }

        return result
    }*/
  signUp = async (userData) => {
    const result = { value: null, error: null }
    const { value, error } = await Repository.users.createUser(userData)
    if (!value || error) {
      result.error = new Error('Error when creating a user')
      return result
    }
    result.value = value
    return result
  }
}

export default new AuthService()
