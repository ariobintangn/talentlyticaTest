import React, { useEffect, useState } from "react";

function ScoreTable() {
  const [scores, setScores] = useState({});
  const [showResult, setShowResult] = useState(false)

  const handleScoreChange = (event, indexStudent, indexCriteria) => {
    setShowResult(false)
    console.log(
      indexStudent,
      indexCriteria,
      "indexStudent",
      event.target.value
    );
    if (!scores[`aspek_penilaian_${indexCriteria + 1}`]) {
      setScores({
        ...scores,
        [`aspek_penilaian_${indexCriteria + 1}`]: {},
      });
    }
    setScores({
      ...scores,
      [`aspek_penilaian_${indexCriteria + 1}`]: {
        ...scores[`aspek_penilaian_${indexCriteria + 1}`],
        [`mahasiswa_${indexStudent+1}`]: parseInt(event.target.value)
      }
    })
    
  };

  useEffect(() => {
    console.log(scores, "SCORE NOW");
  }, [scores]);

  const handleSave = () => {
    setShowResult(true)
    console.log(scores);
  };

  return (
    <div>
      <table style={{tableLayout:"auto", borderColor:"white", border:12}}>
        <thead>
          <tr>
            <th>Nama Mahasiswa</th>
            <th>Aspek Penilaian 1</th>
            <th>Aspek Penilaian 2</th>
            <th>Aspek Penilaian 3</th>
            <th>Aspek Penilaian 4</th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill("")
            .map((el, indexStudent) => {
              return (
                <tr>
                  <td>{`Mahasiswa_${indexStudent + 1}`}</td>
                  {Array(4)
                    .fill(1)
                    .map((el, indexCriteria) => {
                      return (
                        <td>
                          <select
                            onChange={(event) =>
                              handleScoreChange(
                                event,
                                indexStudent,
                                indexCriteria
                              )
                            }
                          >
                            <option value="0" selected disabled>-</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </td>
                      );
                    })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <button onClick={handleSave} style={{backgroundColor:"black", color:"white"}}>SIMPAN</button>

    
      {showResult && <div>
        {JSON.stringify(scores, null, 2)}
      </div>}
    </div>
  );
}

export default ScoreTable;
