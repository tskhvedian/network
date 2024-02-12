import { Models } from "appwrite";

type PostStatsProps = {
  post: Models.Document;
  userId: String;
};

const PostStats = ({ post, userId }: PostStatsProps) => {
  return <div className="flex justify-between items-center z-20">
 <div className="flex gap-2 m"> </div>
  </div>;
};

export default PostStats;
