import Slider from "./imgSlider";
import axios from "axios";
import { useEffect, useState } from "react";

interface imageData {
  download_url: string;
}

export default function Post() {
  const [data, setData] = useState<imageData[]>([]);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    axios
      .get<imageData[]>(`https://picsum.photos/v2/list?page=${page}&limit=5`)
      .then((arr) => setData(arr.data));
  }, [page]);

  return (
    <div className="container">
      <div className="post-container">
        {data.map((item, _) => {
          return <img src={item.download_url} />;
        })}
      </div>

      <Slider page={page} setPage={setPage} />
    </div>
  );
}
