import { useDashboard } from '@/routes/dashboard/hooks/useDashboard';

export default function Dashboard () {

    const { message } = useDashboard();

    return <div>{ message }</div>
}