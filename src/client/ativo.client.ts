import { Ativo } from '@/model/ativo'
import { Condicao } from '@/model/condicao'
import { Status } from '@/model/status'
import axios, { AxiosInstance } from 'axios'

export class AtivoClient {

    private axiosClient: AxiosInstance


    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/ativos',
            headers: { 'Content-type': 'application/json' }
        })
    }
    
    public async findById(id: number): Promise<Ativo> {
        try {
            return (await this.axiosClient.get<Ativo>(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findAll(): Promise<Ativo[]> {
        try {
            return (await this.axiosClient.get<Ativo[]>('/all')).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByCondicao(condicao: Condicao): Promise<Ativo[]> {
        try {
            return (await this.axiosClient.get<Ativo[]>(`/condicao/${condicao}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByStatus(status: Status): Promise<Ativo[]> {
        try {
            return (await this.axiosClient.get<Ativo[]>(`/status/${status}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByIdPatrimonio(idPatrimonio: string): Promise<Ativo[]> {
        try {
            return (await this.axiosClient.get<Ativo[]>(`/idPatrimonio/${idPatrimonio}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async findByNomeCategoria(nomeCategoria: string): Promise<Ativo[]> {
        try {
            return (await this.axiosClient.get<Ativo[]>(`/nomeCategoria/${nomeCategoria}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async save(ativo: Ativo): Promise<Ativo> {
        try {
            return (await this.axiosClient.post<Ativo>('/', ativo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async update(ativo: Ativo): Promise<Ativo> {
        try {
            return (await this.axiosClient.put<Ativo>('/', ativo)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async delete(id: number): Promise<void> {
        try {
            await this.axiosClient.delete(`/${id}`)
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

}