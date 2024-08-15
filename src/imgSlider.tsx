interface sliderProps {
  page: number;
  setPage: (page: number) => void;
}

export default function Slider({ page, setPage }: sliderProps) {
  const prevThreeNoArr = Array.from(
    { length: 3 },
    (_, index) => page - 1 - index
  )
    .filter((value) => value > 0)
    .reverse();
  const nextFourNoArr = Array.from({ length: 4 }, (_, index) => page + index);

  const pageArr = [...prevThreeNoArr, ...nextFourNoArr];

  console.log(prevThreeNoArr);

  const handelNext = () => {
    setPage(page + 1);
  };

  const handelPrev = () => {
    setPage(page - 1);
  };

  return (
    <div className="page-container">
      {page > 1 ? (
        <div onClick={handelPrev} className="page-btn">
          {"<"}
        </div>
      ) : (
        ""
      )}
      {pageArr.map((val) => {
        return (
          <div
            onClick={() => setPage(val)}
            className={val == page ? `page-btn active` : `page-btn`}
          >
            {val}
          </div>
        );
      })}

      <div className="page-btn" onClick={handelNext}>
        {">"}
      </div>
    </div>
  );
}
