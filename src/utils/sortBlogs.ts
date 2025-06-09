import IBlog from '../interfaces/IBlog';

const sortBlogs = (blogs: IBlog[], ids: number[]) => {
  const copyBlogs = [...blogs];

  return copyBlogs.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
};

export default sortBlogs;
