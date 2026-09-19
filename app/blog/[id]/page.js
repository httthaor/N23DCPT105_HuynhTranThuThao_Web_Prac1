async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <a href="/" className="text-indigo-600 hover:underline mb-4 inline-block">
        Back to Blog
      </a>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
    </div>
  );
}