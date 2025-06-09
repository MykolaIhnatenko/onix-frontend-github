import { IRandomBlogsData } from '../api/getRandomBlogs';

const normalizeBlogsData = (data: IRandomBlogsData[]) => data?.map((blog) => {
  const {
    id,
    ...rest
  } = blog;

  return {
    id,
    attributes: {
      ...rest,
      picture: {
        data: {
          attributes: {
            ...rest?.picture,
            formats: {
              ...rest?.picture?.formats,
            },
          },
        },
      },
      executor: {
        data: {
          id: 1,
          attributes: {
            ...rest?.executor,
            picture: {
              data: {
                attributes: {
                  ...rest?.executor?.picture,
                  formats: {
                    ...rest?.executor?.picture?.data?.attributes?.formats,
                  },
                },
              },
            },
          },
        },
      },
      writer: {
        data: [
          {
            id: 2,
            attributes: {
              ...rest?.writer,
              picture: {
                data: {
                  attributes: {
                    ...rest?.writer?.picture,
                    formats: {
                      ...rest?.writer?.picture?.data?.attributes?.formats,
                    },
                  },
                },
              },
            },
          },
          {
            id: 3,
            attributes: {
              ...rest?.writer,
              picture: {
                data: {
                  attributes: {
                    ...rest?.writer?.picture,
                    formats: {
                      ...rest?.writer?.picture?.data?.attributes?.formats,
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  };
});

export default normalizeBlogsData;
