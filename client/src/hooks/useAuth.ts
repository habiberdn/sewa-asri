import useSWRMutation from 'swr/mutation';
const API = "https://wild-lime-newt-wig.cyclic.app/api/v1/user";

function useLogin() {
    async function fetcher(url:string, { arg }: { arg: { email:string, password:string }}) {
        return await fetch(`${API}${url}`, {
            method: 'POST',

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                "email": arg.email,
                "password": arg.password
            })
        }).then(res => res.json());
    }

    const { error:loginError, trigger:login, isMutating:isLoading } = useSWRMutation("/login", fetcher);
    
    return { loginError, login, isLoading };
}

function useRegister() {
    async function fetcher(url:string, { arg }: { arg: { name:string, email:string, password:string, otp:string }}) {
        return await fetch(`${API}${url}`, {
            method: 'POST',

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                "name": "user1",
                "email": arg.email,
                "password": arg.password,
                "otp": arg.otp,
                "role": "manager"
            })
        }).then(res => res.json());
    }

    const { data, error, trigger:createAccount, isMutating:isCreating } = useSWRMutation("/signup", fetcher);
    
    return { data, error, createAccount, isCreating };
}

function useLogout() {
    async function fetcher(url:string, { arg }: { arg: { token:string } }) {
        return await fetch(`${API}${url}`, {
            method: 'GET',

            headers: {
                "Content-Type": "application/json",
                "Cookie": arg.token
            }
        }).then(res => res.json());
    }

    const { isMutating, error, trigger } = useSWRMutation("/logout", fetcher);
    
    return { isMutating, error, trigger };
}

function useForgotPassword() {
    async function fetcher(url:string, { arg }: { arg: { email:string } }) {
        return await fetch(`${API}${url}`, {
            method: 'POST',

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                "email": arg.email
            })
        }).then(res => res.json());
    }

    const { isMutating:isLoading, error, trigger:forgotPassword } = useSWRMutation("/forgotPassword", fetcher);
    
    return { isLoading, error, forgotPassword };
}

function useResetPassword() {
    async function fetcher(url:string, { arg }: { arg: { token:string, password:string, passwordConfirm:string } }) {
        return await fetch(`${API}${url}?token=${arg.token}`, {
            method: 'PATCH',

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                "token": arg.token,
                "password": arg.password,
                "passwordConfirm": arg.passwordConfirm
            })
        }).then(res => res.json());
    }

    const { isMutating:isLoading, error, trigger:resetPassword } = useSWRMutation("/resetPassword", fetcher);
    
    return { isLoading, error, resetPassword };
}

export { useLogout, useLogin, useRegister, useForgotPassword, useResetPassword };