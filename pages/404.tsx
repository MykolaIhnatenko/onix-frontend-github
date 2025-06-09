import ErrorPageView from '../src/pages/ErrorPageView/ErrorPageView';
import Layout from '../src/layout/Layout';

function Error404() {
  return (
    <Layout
      seoData={{}}
      showFooter={false}
    >
      <ErrorPageView />
    </Layout>
  );
}

export default Error404;
