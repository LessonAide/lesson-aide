import { useLogin } from '@/routes/login/hooks/useLogin';

export default function Dashboard () {

    const { message } = useLogin();
    console.log('here');

    return <div>{ message }</div>
}