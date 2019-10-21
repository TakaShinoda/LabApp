import Link from 'next/link';
import Layout from '../components/Layout';
import Firelist from '../components/Firelist';
import Button from '@material-ui/core/Button';

export default () => (
    <Layout header='Whiteboard' title='連絡板'>
        <Firelist />
        <br />
        <Link href='/contact_add'>
            <Button variant="contained" color="primary">新規投稿</Button>
        </Link>
        &nbsp;
        <Link href='/contact_del'>
            <Button variant="contained">投稿削除</Button>
        </Link>
        <br />
        <Link href='/'>
            <a>&lt;&lt; 戻る</a>
        </Link>
    </Layout>
)
