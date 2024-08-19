interface sliderProps {
  p: number;
  q: (p: number) => void;
}

export default function Slider({ p, q }: sliderProps) {

  const prevThreeNoArr = Array.from({ length: 3 }, (_, index) => p - (1 + index))
    .filter((value) => value > 0)
    .reverse();

  const nextFourNoArr = Array.from({ length: 4 }, (_, index) => p + index);

  const pageArr = [...prevThreeNoArr, ...nextFourNoArr];

  console.log(prevThreeNoArr);

  const handelNext = () => {
    q(p + 1);
  };

  const handelPrev = () => {
    q(p - 1);
  };

  return (
    <div className="page-container">
      {p > 1 ? (
        <div onClick={handelPrev} className="page-btn">
          {"<"}
        </div>
      ) : (
        ""
      )}

      {pageArr.map((val,index) => {
        return (
          <div
            onClick={() => q(val)}
            className={val == p ? "page-btn active" : `page-btn`}
            key={index}
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
