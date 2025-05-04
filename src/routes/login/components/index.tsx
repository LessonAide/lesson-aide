import { useLogin } from '@/routes/login/hooks/useLogin';

export default function Login () {

    const { message } = useLogin();

    return <div>{ message }</div>
}