import Layout from 'layout/Layout';
import ErrorPageView from 'pages/ErrorPageView/ErrorPageView';

function Forbidden() {
  return (
    <Layout
      seoData={{}}
      showFooter={false}
      isBlockedIp
    >
      <ErrorPageView is403Page />
    </Layout>
  );
}

export default Forbidden;
