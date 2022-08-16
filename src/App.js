import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let priceTable = [
    {
      memberShip: "free",
      price: "$0",
      period: "/month",
      features: [
        { name  : "Single user", enable: true },
        {
          name: "5 gb storage",
          enable: true,
        },
        {
          name: "Unlimited public projects",
          enable: true,
        },
        {
          name: "Community access",
          enable: true,
        },
        {
          name: "Unlimited private projects",
          enable: true,
        },
        {
          name: "Dedicated phone projects",
          enable: true,
        },
        {
          name: "free subdomain",
          enable: true,
        },
        {
          name: "monthly status report",
          enable: false,
        },
      ],
    },
    {
      memberShip: "plus",
      price: "$9",
      period: "/month",
      features: [
        { name: "Single user", enable: true,bold:true },
        {
          name: "5 gb storage",
          enable: true,
        },
        {
          name: "Unlimited public projects",
          enable: false,
        },
        {
          name: "Community access",
          enable: false,
        },
        {
          name: "Unlimited private projects",
          enable: false,
        },
        {
          name: "Dedicated phone projects",
          enable: false,
        },
        {
          name: "free subdomain",
          enable: false,
        },
        {
         name: "monthly status report",
          enable: false,
        },
      ],
    },
    {
      memberShip: "pro",
      price: "$49",
      period: "/month",
      features: [
        { name: "Single user", enable: true,
        bold:true
      
      },
        {
          name: "5 gb storage",
          enable: true,
          
        },
        {
          name: "Unlimited public projects",
          enable: true,
        },
        {
          name: "Community access",
          enable: true,
        },
        {
          name: "Unlimited private projects",
          enable: true,
        },
        {
          name: "Dedicated phone projects",
          enable: true,
        },
        {
          name: "free subdomain",
          enable: true,
        },
        {
          name: "monthly status report",
          enable: true,
        },
      ],
    },
    
  ];
  return (
    <section class="pricing py-5">
      <div className="container">
        <div className="row">
            {
              priceTable.map((value) => {
              return <Card data={value}></Card>;
            })}
          </div>
          </div>
    </section>
  );
}

export default App;


