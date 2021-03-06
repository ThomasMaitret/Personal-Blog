import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import userConfig from "../../config";

import Container from "../components/Container";
import Card from "../components/Card";
import Article from "../components/Article";
import ArticleHeader from "../components/ArticleHeader";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const author = get(this.props, "data.site.siteMetadata.author");
    const { previous, next } = this.props.pathContext;

    let url = "";
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }

    return (
      <Container>
        <Helmet title={`${post.frontmatter.title} - ${author}`} />
        <Card>
          <ArticleHeader>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <span />
          </ArticleHeader>
          <Article>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Article>
        </Card>

        <PageNav>
          {previous && (
            <Button to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Button>
          )}

          {next && (
            <Button to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Button>
          )}
        </PageNav>
      </Container>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`;
