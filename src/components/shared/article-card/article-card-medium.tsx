import { getArticleLink } from '@/lib/utils'
import type { IArticle } from '@/types/interfaces'

interface ArticleCardMediumProps {
	article: IArticle
}

const ArticleCardMedium: React.FC<ArticleCardMediumProps> = ({ article }) => {
	return (
		<a
			href={getArticleLink(article)}
			className='block group p-6 rounded-2xl shadow-lg hover:shadow-pink-300/60 transition-shadow duration-300 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 border border-pink-100/60'
		>
			<div className='grid sm:grid-cols-3 gap-6 items-start'>
				<div className='sm:col-span-1'>
					<img
						className='w-full h-40 object-cover rounded-lg'
						src={article.image}
						alt={article.title}
					/>
				</div>
				<div className='sm:col-span-2'>
					<span className='inline-block bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded-full'>
						{article.type}
					</span>
					<h3 className='mt-2 text-xl font-bold text-pink-900 group-hover:text-pink-700 transition-colors duration-300'>
						{article.title}
					</h3>
					<p className='mt-2 text-base text-pink-800/80 line-clamp-2'>
						{article.summary}
					</p>
					<p className='mt-3 text-sm text-pink-500'>
						{new Date(article.published_date ?? '').toLocaleDateString()}
					</p>
				</div>
			</div>
		</a>
	)
}

export default ArticleCardMedium
