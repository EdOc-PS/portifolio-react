const ModalSkeleton = () => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="w-full h-64 rounded-xl mb-4 skeleton-shimmer" />

            <div className="mb-4 space-y-2">
                <div className="h-5 w-1/3 rounded-xl skeleton-shimmer" />
                <div className="space-y-2">
                    <div className="h-18 w-3/4 rounded-xl skeleton-shimmer" />

                </div>
            </div>

            <div className="mb-3">
                <div className="h-5 w-1/4 rounded-xl mb-3 skeleton-shimmer" />
                <div className="flex flex-wrap gap-2">
                    <div className="h-8 w-20 rounded-xl skeleton-shimmer" />
                    <div className="h-8 w-24 rounded-xl skeleton-shimmer" />
                    <div className="h-8 w-16 rounded-xl skeleton-shimmer" />
                </div>
            </div>

            <div className="flex gap-4">
                <div className="h-12 w-full rounded-xl skeleton-shimmer" />
                <div className="h-12 w-full rounded-xl skeleton-shimmer" />
            </div>
        </div>
    )
}

export default ModalSkeleton;