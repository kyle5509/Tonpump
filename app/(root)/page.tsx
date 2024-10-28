import Main from "@/components/Home/Main";
import Framer from "@/components/Layout/Framer";
import Updates from "@/components/General/Updates";
import Cards from "@/components/Home/New";
import PostBackdrop from "@/components/Home/PostBackdrop";

export default async function Base() {
  const response = await fetch('https://backend-server-tvb6.onrender.com/api/users/1474758339/posts')
  const result = await response.json()
  const posts = result.data
  console.log(posts)
  return (
    <Framer>
      <Main posts={posts}/>
    </Framer>
  );
}

