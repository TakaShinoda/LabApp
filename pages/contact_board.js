import Link from 'next/link';
import Layout from '../components/Layout';
import Firelist from '../components/Firelist';


export default () => (
    <Layout header='header' title='連絡板'>
        <Firelist />
        <br />
        <Link href='/contact_add'>
            <button>新規作成</button>
        </Link>
        <Link href='/contact_del'>
            <button>投稿削除</button>
        </Link>
        <br />
        <Link href='/'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
)
