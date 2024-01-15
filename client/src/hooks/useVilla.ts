import useSWRMutation from "swr/mutation";
import { CreateVillaInterface } from "../utils/villa-interfaces";

const API = "https://wild-lime-newt-wig.cyclic.app/api/v1";

interface Argument {
    userId: string;
    token: string;
    villa: CreateVillaInterface;
}

function useCreateVilla() {
    async function fetcher(url:string, { arg }: { arg: Argument }) {
        return await fetch(`${API}${url}/${arg.userId}`, {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                "Cookie": arg.token
            },

            body: JSON.stringify({
                ...arg
            })
        }).then(res => res.json())
    }

    const { data, error, trigger, isMutating } = useSWRMutation("/villa", fetcher);
    
    return { data, error, trigger, isMutating };
}

function useUpdateVilla() {
    async function fetcher(url:string, { arg }: { arg: Argument }) {
        return await fetch(`${API}${url}/${arg.userId}`, {
            method: 'PUT',

            headers: {
                "Content-Type": "application/json",
                "Cookie": "token"
            }
        }).then(res => res.json())
    }

    const { data, error, trigger: updateName, isMutating: isUpdating } = useSWRMutation("/villa", fetcher);
    
    return { data, error, updateName, isUpdating };
}


export { useCreateVilla, useUpdateVilla };