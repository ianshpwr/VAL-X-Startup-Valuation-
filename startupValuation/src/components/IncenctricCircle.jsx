import { CiDollar } from "react-icons/ci";

export default function ConcentricCircles() {
  return (
    <div style={{
      position: 'relative',
      width: 'fit-content',
    }}>
      <div style={{
        backgroundColor: "rgba(180, 180, 255, 0.2)",
        height: '40vh', width: '40vh', borderRadius: '50%',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}>
        <div style={{
          backgroundColor: "rgba(180, 180, 255, 0.4)",
          height: '34vh', width: '34vh', borderRadius: '50%',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: "rgba(180, 180, 255, 0.6)",
            height: '28vh', width: '28vh', borderRadius: '50%',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: "rgba(180, 180, 255, 0.8)",
              height: '22vh', width: '22vh', borderRadius: '50%',
              display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
              <h1 style={{
                fontSize: '15vh',
                color: 'rgb(64, 64, 153)',
                margin: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <CiDollar />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
