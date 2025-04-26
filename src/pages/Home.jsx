import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.error("Error fetching posts:", err));
    }, []);

    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8" style={{ color: "var(--primary-dark)" }}>
                Latest Blog Posts
            </h1>

            <div className="grid gap-8 md:grid-cols-2">
                {posts.length === 0 ? (
                    <p className="text-center text-gray-500">No posts available yet.</p>
                ) : (
                    posts.map((post) => (
                        <div key={post.id} className="border p-6 rounded shadow-md hover:shadow-lg transition" style={{ backgroundColor: "#F4CCE9" }}>
                            <h2 className="text-2xl font-bold mb-2" style={{ color: "#7D1C4A" }}>{post.title}</h2>
                            <p className="text-gray-700 mb-4">{post.content.substring(0, 150)}...</p>
                            <Link
                                to={`/posts/${post.id}`}
                                className="text-[var(--primary-dark)] font-semibold hover:text-[var(--secondary)] transition"
                            >
                                Read More →
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default HomePage;
