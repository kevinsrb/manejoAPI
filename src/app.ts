import axios from "axios";
import { Post } from "./interfaces/post.interface";

const getData = async (url: string) => {
  const response = await axios.get<Post[]>(url);
  if (response.status === 200) {
    const data = response.data;
    return data;
  } else {
    return null;
  }
};

const main = async () => {
  const data = await getData("https://jsonplaceholder.typicode.com/posts");
  if (data) {
    console.log(data);
  }
};

main();