export default interface IServerSideProps {
  locale: string,
  res: {
    statusCode: number
  }
}

export interface ICareersServerSideProps extends IServerSideProps {
  query: {
    career: string,
  }
}
