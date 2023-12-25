import axios, { AxiosRequestConfig } from 'axios'
import { ApiConfig } from '../ApiConfig'

interface SendRequestResponse {
  data: any
}

export async function sendRequest(
  method: string,
  url: string,
  data: any | null = null,
  params: any | null = null,
  headers: Record<string, string> = {},
): Promise<SendRequestResponse> {
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
    params,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      ...headers,
    },
  }

  try {
    const response = await axios(config)
    return { data: response.data }
  } catch (error) {
    const res = await refreshAccessToken()
    if (res) {
      sessionStorage.setItem('accessToken', res.data.access_token)
      sessionStorage.setItem('refreshToken', res.data.refresh_token)
      return sendRequest(method, url, data, headers)
    } else {
      throw error
    }
  }
}

async function refreshAccessToken() {
  try {
    const response = await axios.post(ApiConfig.refreshToken, {
      refreshToken: sessionStorage.getItem('refreshToken'),
    })

    return response?.data?.data
  } catch (error) {
    console.log(error)
  }
}
