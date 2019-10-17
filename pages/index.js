import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
    <Layout header='header' title='title'>
        <p>hoge</p>
        <hr />
        <Link href='./other'>
            <button>
                go to other &gt;&gt;
            </button>
        </Link>
    </Layout>
);
