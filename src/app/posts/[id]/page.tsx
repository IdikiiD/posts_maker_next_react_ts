
type PostPageProps = {
    params: {
        id: string
        title: string
    }
}

export default function PostPage({ params }:PostPageProps) {
    return <h2>Пост {params.title}</h2>
}