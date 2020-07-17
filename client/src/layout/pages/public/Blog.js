import React from 'react';
import { Link } from 'react-router-dom';
import useDataFetching from '../../../components/custom_hooks/useDataFetching';
import ReactLoading from 'react-loading';
import '../../styles/Blog.css';
import '../../styles/Social.css';
const parseDate = date => {
  const parsedDate = new Date(date);
  return parsedDate.toDateString().split(' ').slice(1, 3).join(' ');
};
function Blog() {
  const { results, loading } = useDataFetching('/api/posts/?sort=-date');
  return (
    <section className='blog-container'>
      <h1 className='section-header'>Blog</h1>
      {!loading && (
        <div className='blog-posts-wrapper'>
          <BlogCards posts={results || []} />
        </div>
      )}
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 'calc(50% - 50px)',
            left: 'calc(50% - 50px)',
            width: '100px',
            height: '100px',
          }}
        >
          <ReactLoading type={'bubbles'} color={'#294057'} />
        </div>
      )}
    </section>
  );
}

const BlogCards = props => {
  return (
    <div className='blog-card-container'>
      {props.posts.map(
        ({ timeToRead, author, title, subTitle, meta, date, src, _id }) => (
          <div key={_id} className='blog-card' id='blog'>
            <div className='blog-img-container'>
              <Link
                key={_id}
                to={{
                  pathname: `/blog/post/${_id}`,
                  state: _id,
                }}
              >
                <figure
                  className='blog-img'
                  style={{ backgroundImage: `url(${src})` }}
                ></figure>
              </Link>
            </div>

            <div className='card-preview' id='blog-card'>
              <div className='card-meta-data-header'>
                <ul>
                  <span className='author-icon far fa-user'></span>
                  <li>{author}</li>
                  <li>{parseDate(date)}</li>
                  <li>{timeToRead} min</li>
                </ul>
                <span className='post-share-button fas fa-ellipsis-v'></span>
              </div>

              <div className='card-preview-content'>
                <h1>
                  <Link
                    key={_id}
                    to={{
                      pathname: `/blog/post/${_id}`,
                      state: _id,
                    }}
                  >
                    {title}
                  </Link>
                </h1>
                <p>{subTitle}</p>
              </div>

              <div className='card-preview-footer'>
                <ul>
                  <li>{meta.views} views</li>
                  <li>Write a comment</li>
                </ul>
                <span className='post-like-button far fa-heart'></span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
const CustomTag = ({ tag: Tag, children }) =>
  Tag !== 'unstyled' ? <Tag>{children}</Tag> : <>{children}</>;

const BlogSocialBar = props => (
  <div className='blog-social-bar-container'>
    <div className='blog-social-list-wrapper'>
      <ul className='blog-social-list'>
        <li className='fab fa-facebook-f' />
        <li className='fab fa-twitter' />
        <li className='fab fa-linkedin-in' />
        <li className='fas fa-link' />
      </ul>
    </div>
  </div>
);
const BlogPostFooter = props => (
  <footer className='blog-post-footer'>
    <BlogSocialBar />
    <div className='post-meta-data'>
      <p>{props.views} views</p>
      <span className='post-like-button far fa-heart'></span>
    </div>
  </footer>
);
const RecentPosts = props => {
  const { results, loading } = useDataFetching(
    `/api/posts/?limit=3&sort=-date&exclude=${props.current}`
  );
  console.log(props.current);
  return !loading ? (
    <section className='recent-post-cards' id='recent-posts'>
      <div className='recent-posts-header'>
        <h1>Recent Posts</h1>
        <Link to='/blog'>See All</Link>
      </div>
      <ul className='recent-post-list'>
        {results.map(({ title, meta, src, _id }) => (
          <div className='list-item' key={_id}>
            <Link
              to={{
                pathname: _id,
                state: _id,
              }}
            >
              <div className='img-wrapper'>
                <figure
                  className='blog-img'
                  style={{ backgroundImage: `url(${src})` }}
                ></figure>
              </div>
            </Link>
            <div className='card-content-wrapper'>
              <div className='card-preview-content'>
                <h1>
                  <Link
                    to={{
                      pathname: _id,
                      state: _id,
                    }}
                  >
                    {title}
                  </Link>
                </h1>
              </div>
              <div className='card-preview-footer'>
                <ul>
                  <li>
                    <span className='views-icon far fa-eye' />
                    {meta.views}
                  </li>
                  <li>Write a comment</li>
                </ul>
                <span className='post-like-button far fa-heart'></span>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </section>
  ) : (
    <div
      style={{
        position: 'fixed',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
        width: '100px',
        height: '100px',
      }}
    >
      <ReactLoading type={'bubbles'} color={'#294057'} />
    </div>
  );
};
const Post = props => {
  const { results, loading } = useDataFetching(
    `/api/posts/${props.location.state}`
  );
  return !loading ? (
    <section className='blog-post-wrapper'>
      <div className='post-container'>
        {results.map(
          ({
            timeToRead,
            author,
            date,
            title,
            subTitle,
            content,
            comments,
            meta,
            src,
            _id,
          }) => (
            <article key={_id} className='blog-post-content' id='blog'>
              <div className='card-meta-data-header'>
                <ul>
                  <span className='author-icon far fa-user' />
                  <li>{author}</li>
                  <li>{parseDate(date)}</li>
                  <li>{timeToRead} min</li>
                </ul>
                <span className='post-share-button fas fa-ellipsis-v' />
              </div>
              <div className='card-preview-content'>
                <h1>{title}</h1>
                <strong>{subTitle}</strong>
              </div>
              <div className='blog-img-container'>
                <img src={src} />
              </div>
              <div className='blog-content-container'>
                {content.blocks.map((block, index) => (
                  <div
                    key={index}
                    data-type={block.blocktype}
                    className='blog-post-content-block'
                  >
                    <CustomTag tag={block.blocktype}>
                      <p style={block.inlinestyles && block.inlinestyles}>
                        {block.text}
                      </p>
                    </CustomTag>
                  </div>
                ))}
              </div>
              <BlogPostFooter views={meta.views} />
            </article>
          )
        )}
      </div>
      <RecentPosts current={props.location.state} />
    </section>
  ) : (
    <div
      style={{
        position: 'fixed',
        top: 'calc(50% - 50px)',
        left: 'calc(50% - 50px)',
        width: '100px',
        height: '100px',
      }}
    >
      <ReactLoading type={'bubbles'} color={'#294057'} />
    </div>
  );
};

export { Blog, Post };
