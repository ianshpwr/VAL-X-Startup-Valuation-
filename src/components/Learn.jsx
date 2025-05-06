import data from "../assets/data/learndata"
function Learn() {
  return (
    <div className="learn">

      <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color: 'rgb(64, 64, 153)'}}>Startup Valuation Glossary</h1>
      <p style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color: 'rgb(64, 64, 153)'}}>Understanding the terminology is the first step to mastering startup valuation. Browse our comprehensive glossary or search for specific terms.</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '24px',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {data.map((i) => (
          <div
            key={i.id}
            className="data"
            style={{

              color: 'rgb(64, 64, 153)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',

              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '200px',
              border:'none'
            }}
          >
           <div>
            <div style={{fontSize:'3vh',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
              <h4>{i.term}</h4><h4 style={{fontSize:"1.5vh",border:"1px solid rgb(64, 64, 153)",padding:"3px",borderRadius:"1vh"}}>{i.category}</h4>
              </div>
            <p style={{fontSize:'14px',color:'rgb(64, 64, 153)'}}>{i.definition}</p>
          </div>

          </div>
        ))}
      </div>
    </div>
  );
}
export default Learn;