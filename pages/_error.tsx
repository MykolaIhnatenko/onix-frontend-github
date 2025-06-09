import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number;
}

function ErrorPage({ statusCode }: ErrorProps) {
  const router = useRouter();

  useEffect(() => {
    if (statusCode === 403) {
      router.replace('/403').catch(() => {});
    }
  }, [statusCode]);

  return null;
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
