import useSWRMutation from 'swr/mutation';
const API = "https://wild-lime-newt-wig.cyclic.app/api/v1/otp";

function useSend() {
    async function fetcher(url:string, { arg }: { arg: { email:string }}) {
        return await fetch(`${API}${url}`, {
            method: 'POST',

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                "email": arg.email,
            })
        }).then(res => res.json());
    }

    const { data, error, trigger:sendOTP, isMutating:isSending } = useSWRMutation("/send-otp", fetcher);
    
    return { data, error, sendOTP, isSending };
}

function useVerification() {
    async function fetcher(url:string, { arg }: { arg: { otp:number }}) {
        return await fetch(`${API}?otp=${arg.otp}`, {
            method: 'GET',

            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }

    const { data:verifyData, error:verifyError, trigger:verifyOtp, isMutating:isVerifying } = useSWRMutation("/", fetcher);
    
    return { verifyData, verifyError, verifyOtp, isVerifying };
}

export { useSend, useVerification };