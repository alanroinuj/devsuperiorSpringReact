import BarChart from "components/barChart";
import DataTable from "components/dataTable";
import DonutChart from "components/donutChart";
import  Footer  from "components/footer";
import  NavBar from "components/navBar";

function App() {
  return (
    <>
      <NavBar/>
        <div className="container">
          <h1 className="text-primary py-3">DashBoard</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 text-center text-secondary>Taxa de sucesso %</h5>
              <BarChart />
            </div>
            <div className="col-sm-6">
              <h5 text-center text-secondary>Todas as Vendas</h5>
              <DonutChart />
            </div>
          </div>
          <div className="py-3">
            <h2 className="text-primary">Todas as Vendas</h2>
          </div>
          <DataTable/>
        </div>
      <Footer/>
    </>
  );
}

export default App;
