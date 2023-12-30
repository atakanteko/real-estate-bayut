import { apiSlice } from "@/api/api";
import { ISystemState } from "@/types";

type ApiSlice = ReturnType<typeof apiSlice.reducer>


export interface IStore {
    api: ApiSlice
    system: ISystemState
}