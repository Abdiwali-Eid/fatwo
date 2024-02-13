import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Disqus from 'gatsby-plugin-disqus';
import React from 'react';
// import { DiscussionEmbed } from 'disqus-react';
import { format } from 'date-fns';
import { BiCategory } from 'react-icons/bi';
import { FiCalendar, FiUser } from 'react-icons/fi';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { Title } from '../components/typography/Title';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles';
// import { SearchResultItemStyles } from '../styles/search/SearchResultItemStyles';
import MyPortableText from '../components/MyPortableText';
import SEO from '../components/seo';
import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
import Releted from '../components/homePage/Releted';
import Reletes from './xiriir';
import Fikir from '../components/homePage/Fikir';

export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
        profileImage {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  const pageurl = typeof window !== 'undefined' ? window.location.href : '';
  const disqusConfig = {
    url: pageurl,
    identifier: blog.slug,
    title: blog.title,
  };

  return (
    <div>
      <SingleBlogStyles>
        <SEO title={blog.title} />
        <PageSpace top={80} bottom={100}>
          <div className="container">
            <div className="blog-header">
              <GatsbyImage
                image={blog.coverImage.asset.gatsbyImageData}
                alt={blog.coverImage.alt}
                className="blog-cover-image"
              />
              <Title className="title">{blog.title}</Title>
              <hr className="hr" />
              <div className="dhig">
                <ParagraphText className="author">
                  <Link to={`/authors/${blog.author.slug.current}`}>
                    <GatsbyImage
                      image={blog.author.profileImage.asset.gatsbyImageData}
                      alt={blog.author.profileImage.alt}
                      className="authorProfileImg"
                    />
                  </Link>
                  <Link to={`/authors/${blog.author.slug.current}`}>
                    {blog.author.name}
                  </Link>
                </ParagraphText>
                <ParagraphText className="publishedAt">
                  <FiCalendar />
                  {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
                </ParagraphText>
                <ParagraphText className="categoriesText">
                  <BiCategory />
                  <span>
                    {blog.categories.map((item, index) => (
                      <span key={item.slug.current}>
                        <Link to={`/categories/${item.slug.current}`}>
                          {item.title}
                        </Link>
                        {index < blog.categories.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </span>
                </ParagraphText>
              </div>
            </div>
            <hr className="hr" />
            <div className="body">
              <MyPortableText value={blog._rawBody} />
              <Disqus config={disqusConfig} />
            </div>
          </div>
        </PageSpace>
      </SingleBlogStyles>
      {blog.categories.map((item, index) => (
        <span key={item.slug.current}>
          {item.title === 'Fikir' ? (
            <Fikir />
          ) : item.title === 'Aqoon guud' ? (
            <Releted />
          ) : (
            <p>" "</p>
          )}
        </span>
      ))}

      {/* {blog.categories.title === 'Aqoon guud' ? (
        <Releted />
      ) : blog.categories.title === 'Fikir' ? (
        <Fikir />
      ) : (
        <p>soomaal</p>
      )} */}
    </div>
  );
}

export default SingleBlog;
