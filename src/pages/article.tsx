import {
    ArticleComments,
    ArticleContent,
    ArticleFeatured,
    ArticleHeader,
    ArticleLatest,
    ArticleNavigation,
    ArticlePopular,
} from '@/components/article'
import { Container } from '@/components/shared/container'
import { Loading } from '@/components/ui/loading'
import { useGetArticleBySlug, useGetArticles } from '@/hooks/useArticles'
import { useParams } from 'react-router'

export function ArticlePage() {
    const { slug } = useParams()

    const { data: article, isLoading: isArticleLoading } = useGetArticleBySlug(
        slug || ''
    )
    const { data: articles, isLoading: isArticlesLoading } = useGetArticles()

  if (isArticleLoading || isArticlesLoading) {
    return (
      <Container>
        <div className='py-12 bg-pink-50'>
          <Loading />
        </div>
      </Container>
    )
  }

    if (!article) return null

  return (
    <Container>
      <div className='py-12 bg-pink-50'>
        {/* Article Header */}
        <div className='rounded-lg bg-pink-100 shadow-md p-4 mb-8'>
          <ArticleHeader article={article} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Left Column - Article Content */}
          <div className='lg:col-span-8'>
            {/* Article Navigation */}
            <div className='mb-6 rounded bg-pink-200/60 p-3'>
              <ArticleNavigation currentArticle={article} articles={articles} />
            </div>
            {/* Article Content */}
            <div className='rounded bg-white border-l-4 border-pink-400 p-4 shadow-sm'>
              <ArticleContent article={article} />
            </div>
          </div>
          {/* Right Column - Articles & Comments */}
          <div className='lg:col-span-4 space-y-8'>
            {/* Comments Section */}
            <div className='rounded bg-pink-100/80 p-4 shadow'>
              <ArticleComments article={article} />
            </div>
            {/* Latest Articles */}
            <div className='rounded bg-pink-200/60 p-4'>
              <ArticleLatest articles={articles} />
            </div>
            {/* Popular Articles */}
            <div className='rounded bg-pink-200/60 p-4'>
              <ArticlePopular articles={articles} />
            </div>
            {/* Featured Articles */}
            <div className='rounded bg-pink-200/60 p-4'>
              <ArticleFeatured articles={articles} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}