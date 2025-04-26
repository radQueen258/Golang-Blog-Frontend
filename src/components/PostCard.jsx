import { Link } from "react-router-dom";

function PostCard({ post }) {
    return (
        <div className="p-4 border rounded shadow hover:shadow-md transition">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p>
            <Link to={`/posts/${post.id}`} className="text-blue-500">Read more</Link>
        </div>
    );
}

export default PostCard;
