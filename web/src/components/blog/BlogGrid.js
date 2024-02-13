import React from 'react';
import Slick from 'react-slick';
import { BlogGridStyles } from '../../styles/blog/BlogGridStyles';
import BlogItem from './BlogItem';

function BlogGrid({ blogs }) {
  return (
    <BlogGridStyles>
      {blogs &&
        blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            path={blog.slug.current}
            title={blog.title}
            // categories={blog.categories}
            author={blog.author}
            // image={{
            //   imageData: blog.coverImage && blog.coverImage.asset && blog.coverImage.asset.gatsbyImageData,
            //   altText: blog.coverImage && blog.coverImage.alt,
            // }}

          />
        ))}
    </BlogGridStyles>
  );
}

export default BlogGrid;
