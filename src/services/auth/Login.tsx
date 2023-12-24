import axios, { AxiosRequestConfig } from 'axios'

export async function LoginApi(
  method: string,
  url: string,
  data: any | null = null,
  params: any | null = null,
) {
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    params,
  }

  try {
    const response = await axios(config)
    return { data: response.data }
  } catch (error) {}
}
