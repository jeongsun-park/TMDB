import { useEffect, useState } from "react";

export default function Detail({ type, id }) {
  const [detailData, setDetailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=ko-KR`
        );
        const data = await response.json();
        setDetailData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id, type]);

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러: {error}</p>;

  return (
    <div>
      <div>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${detailData.poster_path}`}
              alt="포스터"
            />
          </div>
          <div>
            <h1>{detailData.title || detailData.name}</h1>
            <p>{detailData.release_date || detailData.first_air_date}</p>
            <p>
              <p>줄거리</p>
              {detailData.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
