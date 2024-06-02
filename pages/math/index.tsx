import Image from "next/image";
import Container from "../../components/Container";
import portfolios, { filters } from "../../data/portfolios";
import { useEffect, useState } from "react";
import { ReactMixitup } from "react-mixitup";
import MyInput from "components/common/MyInput";

const Math = () => {
  let tmpN =
    "48584506361897134235820959624942020445814005879832445494830930850619347047088099284506447698655243648499972470249151191104116057391774078569197543265718554420572104457358183681829823754139634338225199452191651284348332905131193199953502413758765239264874613394906870130562295813219481113685339535565290850023875092856892694555974281546386510730049106723058933586052544096664351265349363643957125565695936815184334857605266940161251266951421550539554519153785457525756590740540157929001765967965480064427829131488548259914721248506352686630476300";
  let tmpH = 17;
  let tmpW = 106;

  const [N, setN] = useState(tmpN);
  const [H, setH] = useState(tmpH);
  const [W, setW] = useState(tmpW);

  const [arr, setArr] = useState<boolean[][]>([]);
  useEffect(() => {
    if (H && W) {
      if (H <= 20 && W <= 106) {
        const newArr = Array(H).fill(Array(W).fill(false));
        setArr(newArr);
      } else {
        alert("H<=20 && W<=106 이여야합니다.");
        setH(17);
        setW(106);
      }
    }
  }, [H, W]);

  return (
    <Container>
      <div className="flex flex-wrap mb-6">
        <MyInput
          label="N:"
          coverClass="mb-3 w-full h-16 gap-4"
          inputClass="text-xl"
          placeholder="input"
          state={N}
          setter={setN}
        />
        <MyInput
          label="H:"
          coverClass="mb-3 w-full h-16 gap-4 sm:w-1/2 "
          inputClass="text-xl"
          inputType="number"
          placeholder="input"
          state={H}
          setter={setH}
        />
        <MyInput
          label="W:"
          coverClass="mb-3 w-full h-16 gap-4 sm:w-1/2"
          inputClass="text-xl"
          inputType="number"
          placeholder="input"
          state={W}
          setter={setW}
        />
      </div>
      <div className="cover py-3">
        <table>
          <tbody>
            {arr.map((row, x) => (
              <tr className="row" key={x}>
                {row.map((element, y) => (
                  <td
                    className={`cell ${
                      element ? "my-bg-black" : "my-bg-white"
                    }`}
                    key={`${x} ${y}`}
                    onClick={() => {
                      const newArr = arr.map((row, rowIndex) =>
                        row.map((col, colIndex) => {
                          if (rowIndex === x && colIndex === y) {
                            return !col;
                          }
                          return col;
                        })
                      );
                      setArr(newArr);
                    }}
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <style jsx>{`
        .cover {
          overflow-x: scroll;
          max-width: 1024px;
        }

        .row {
          display: flex;
        }

        .cell {
          cursor: pointer;
          width: 12px;
          height: 12px;
          border: 0.5px solid gray;
        }

        .my-bg-black {
          background-color: black;
        }

        .my-bg-white {
          background-color: white;
        }
      `}</style>
    </Container>
  );
};

export default Math;
