import Card from "./components/Card";
import equilibriumImage from "./assets/images/image-equilibrium.jpg";
import avatarImage from "./assets/images/image-avatar.png";

function App() {
  return (
    <main className="bg-blue-950 text-white min-h-screen flex items-center justify-center ">
      <Card
        imageUrl={equilibriumImage}
        titleText="Equilibrium #3429"
        textContent="Our Equilibrium collection promotes balance and calm."
        daysLeft={3}
        ETH={0.041}
        authorImage={avatarImage}
        authorName="Jules Wyvern"
      />
    </main>
  );
}

export default App;
