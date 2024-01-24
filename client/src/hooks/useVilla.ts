import useSWRMutation from "swr/mutation";
import { CreateVillaInterface } from "../utils/villa-interfaces";
import { getUser } from '../utils/userStore';

const API = "https://wild-lime-newt-wig.cyclic.app/api/v1";

interface Argument {
    villa: CreateVillaInterface | null;
}

function useCreateVilla() {
    async function fetcher(url:string, { arg }: { arg: Argument }) {
        console.info("Fetcher: ", arg.villa);
        return await fetch(`${API}${url}/6595478b6f9fc196058aced5`, {
            method: 'POST',

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTU0NzhiNmY5ZmMxOTYwNThhY2VkNSIsImlhdCI6MTcwNTk3NjM4NiwiZXhwIjoxNzA1OTk3OTg2fQ.4lzOduNo3gj6bQYIMJhHKUS8bbAnCyseGB_nNNnu5Mw`
            },

            body: JSON.stringify({
                ...arg.villa
            })
        }).then(res => res.json())
    }

    const { data, error, trigger: createNewVilla, isMutating: isCreating } = useSWRMutation("/villa", fetcher);
    
    return { data, error, createNewVilla, isCreating };
}

function useUpdateVilla() {
    const user = getUser();

    async function fetcher(url:string, { arg }: { arg: Argument }) {
        return await fetch(`${API}${url}/${user?.id}`, {
            method: 'PUT',

            headers: {
                "Content-Type": "application/json",
                "Cookie": "token"
            },

            body: JSON.stringify({
                arg
            })
        }).then(res => res.json())
    }

    const { data, error, trigger: updateName, isMutating: isUpdating } = useSWRMutation("/villa", fetcher);
    
    return { data, error, updateName, isUpdating };
}


export { useCreateVilla, useUpdateVilla };