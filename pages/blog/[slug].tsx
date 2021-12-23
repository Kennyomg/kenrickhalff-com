import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from "next/head"

type PostPageProps = {
  frontMatter: {
    [key: string] : any
    title: string
  }
  slug: string
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)

  return {
    props: {
      frontMatter,
      slug,
      mdxSource
    }
  }
}

const PostPage = ({ frontMatter: { title }, mdxSource } : PostPageProps) => {
  return (
    <article>
      <Head>
        <title>{`${title} - Kenrick Halff`}</title>
      </Head>
      <h1>{title}</h1>
      <MDXRemote {...mdxSource} />
    </article>
  )
}

export default PostPage