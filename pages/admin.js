import Layout from '../components/Layout';
import Admin from '../components/Admin';
import Link from 'next/link';

export default () => (
    <Layout header='Whiteboard' title='Admin'>
        <p>管理者画面</p>
        <Admin />
        <Link href='/'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
    
    
);