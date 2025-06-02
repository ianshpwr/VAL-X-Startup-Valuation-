import { useEffect, useState } from 'react';
import  supabase  from './../Supabase/SupabaseClient'; 
import Navbar from './../Navbar/Navbar';
const Browse = () => {
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStartups = async () => {
      const { data, error } = await supabase
        .from('StartupData')
        .select('*');

      if (error) {
        setError(error.message);
        setStartups([]);
      } else {
        setStartups(data);
      }

      setLoading(false);
    };

    fetchStartups();
  }, []);

  if (loading) return <p>Loading startups...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <Navbar />
      <h2>Startup List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>Valuation</th>
            <th>FundingRounds</th>
            <th>InvestmentAmount</th>
            <th>NumberofInvestors</th>
            <th>YearFounded</th>
            <th>GrowthRate</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {startups.map((startup) => (
            <tr key={startup.id}>
              <td>{startup.StartupName}</td>
              <td>{startup.Industry}</td>
              <td>$ {startup.Valuation}</td>
                <td>{startup.FundingRounds}</td>
                <td>$ {startup.InvestmentAmount}</td>
                <td>{startup.NumberofInvestors}</td>
                <td>{startup.YearFounded}</td>
                <td>{startup.GrowthRate}%</td>
                <td>{startup.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Browse;
