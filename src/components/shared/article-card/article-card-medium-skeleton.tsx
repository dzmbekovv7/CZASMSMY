const ArticleCardMediumSkeleton: React.FC = () => {
	return (
		<div className='block p-6 rounded-2xl shadow-lg bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 border border-pink-100/60'>
			<div className='grid sm:grid-cols-3 gap-6 items-start'>
				<div className='sm:col-span-1'>
					<div className='w-full h-40 bg-pink-200/40 rounded-lg animate-pulse' />
				</div>
				<div className='sm:col-span-2'>
					<span className='inline-block bg-pink-100/60 text-xs font-semibold px-2 py-1 rounded-full w-16 h-5 animate-pulse'></span>
					<div className='mt-2 bg-pink-100/60 h-6 w-3/4 rounded animate-pulse'></div>
					<div className='mt-2 bg-pink-100/60 h-4 w-full rounded animate-pulse'></div>
					<div className='mt-1 bg-pink-100/60 h-4 w-5/6 rounded animate-pulse'></div>
					<div className='mt-3 bg-pink-100/60 h-4 w-1/4 rounded animate-pulse'></div>
				</div>
			</div>
		</div>
	)
}

export default ArticleCardMediumSkeleton
