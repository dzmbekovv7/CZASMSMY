import ArticleCardMedium from '@/components/shared/article-card/article-card-medium'
import { Container } from '@/components/shared/container'
import { useGetArticles } from '@/hooks/useArticles'
import { XIcon } from 'lucide-react'
import { Link, useSearchParams } from 'react-router'

export function BlogPage() {
	const [searchParams] = useSearchParams()
	const type = searchParams.get('type') || ''
	const { data: articles = [], isLoading, isError } = useGetArticles()

	if (isLoading) {
		return (
			<Container>
				<section className='py-10'>
					<h1 className='text-3xl font-bold mb-6'>Blog</h1>
					<p>Loading articles...</p>
				</section>
			</Container>
		)
	}

	if (isError) {
		return (
			<Container>
				<section className='py-10'>
					<h1 className='text-3xl font-bold mb-6'>Blog</h1>
					<p>Error loading articles. Please try again later.</p>
				</section>
			</Container>
		)
	}

	const filteredArticles = type
		? articles?.filter(article => article.type === type)
		: articles

	return (
		<Container>
			<section className='py-10'>
				<h1 className='text-3xl font-bold mb-6'>Blog</h1>
				{type && (
					<div className='mb-4 flex gap-1.5 items-center max-sm:flex-col max-sm:items-start'>
						Showing articles of type:{' '}
						<div className='flex items-center gap-1.5 flex-wrap'>
							<strong style={{overflowWrap: "anywhere"}} className='text-wrap'>{type}</strong>
							<Link to='/blog'>
								<XIcon strokeWidth={1.5} />
							</Link>
						</div>
					</div>
				)}
				{!!filteredArticles && filteredArticles.length > 0 ? (
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{filteredArticles?.map(article => (
							<ArticleCardMedium key={article.id} article={article} />
						))}
					</div>
				) : (
					<p>No articles found{type ? ` for type "${type}"` : ''}.</p>
				)}
			</section>
		</Container>
	)
}
