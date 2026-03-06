import axios from 'redaxios'
import { auth } from '../lib/firebase'

const apiBase = axios.create()

const attachToken = async (config: any) => {
    const user = auth.currentUser
    if (user) {
        const token = await user.getIdToken()
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }
    }
    return config
}

export const apiClient = {
    get: async <T>(url: string, config: any = {}) => {
        const newConfig = await attachToken(config)
        return apiBase.get<T>(url, newConfig)
    },
    post: async <T>(url: string, data?: any, config: any = {}) => {
        const newConfig = await attachToken(config)
        return apiBase.post<T>(url, data, newConfig)
    },
    put: async <T>(url: string, data?: any, config: any = {}) => {
        const newConfig = await attachToken(config)
        return apiBase.put<T>(url, data, newConfig)
    },
    delete: async <T>(url: string, config: any = {}) => {
        const newConfig = await attachToken(config)
        return apiBase.delete<T>(url, newConfig)
    }
}
