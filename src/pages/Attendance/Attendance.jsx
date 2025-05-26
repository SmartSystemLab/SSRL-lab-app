import BigGreenButton from "../../components/UI/BigGreenButton";
// import LogTable from "./LogTable";

import SampleData from "./SampleData.json";
import LogTable2 from "./components/LogTable2";
import { useState, useEffect } from "react";
import Pagination from "./components/Pagination";
import Countdown from "./components/Countdown";
import "./table.css";
import Rules from "./components/Rules";

const Attendance = () => {
  const duration = 4 * 60 * 60 * 1000;
  const [time, setTime] = useState(duration);
  const [on, setOn] = useState(false);

  const DescendingData = [...SampleData].sort((a, b) => b.id - a.id);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(14);
  const last = currentPage * postsPerPage;
  const first = last - postsPerPage;
  const currentPosts = DescendingData.slice(first, last);

  return (
    <>
      <div>
        <div className="container">
          <div className="mt-8">
            <div className="flex justify-between">
              <div className="text-2xl font-medium uppercase">Attendance</div>

              {/* CountDown Timer */}
              <Countdown time={time} setTime={setTime} on={on} setOn={setOn} />
            </div>
            <hr className="bg-black" />

            {/* Content */}
            <div className="mt-8 space-y-4 rounded-xl border px-10 py-8 shadow-lg">
              {/* Rules */}
              <Rules />

              {/*In / Out Buttons */}
              <div className="mt-10 flex justify-center gap-8">
                {/* In */}
                <BigGreenButton extraStyles="">
                  <button
                    className="w-12"
                    onClick={() => {
                      setTime(duration);
                      setOn(true);
                    }}
                  >
                    In
                  </button>
                </BigGreenButton>

                {/* Out */}
                <BigGreenButton>
                  <button
                    onClick={() => {
                      setTime(0);
                      setOn(false);
                    }}
                    className="w-12"
                  >
                    Out
                  </button>
                </BigGreenButton>
              </div>

              {/* Log table */}
              <LogTable2 data={currentPosts} />
              <Pagination
                totalPosts={SampleData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
