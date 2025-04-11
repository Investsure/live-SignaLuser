import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import "./LiveScoreBoard.css";

const LiveScoreBoard = () => {
  const [signal, setSignal] = useState("OFF");
  const [result, setResult] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "signals", "currentSignal"), (doc) => {
      const data = doc.data();
      setSignal(data.signal);
      setResult(data.result || "");
    });

    return () => unsub();
  }, []);

  return (
    <div className="scoreboard">
      <div className={`signal ${signal}`}>
        {signal === "OFF" ? "SIGNAL OFF" : signal}
      </div>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default LiveScoreBoard;
