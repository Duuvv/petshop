// import components
import { useEffect, useState } from 'react';
import Pets from '../components/Pets';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Adoption from '../components/Adoption';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  const [recipes, setRecipes] = useState([]); // Estado para almacenar las recetas

  // Efecto para obtener las recetas del backend
  useEffect(() => {
    // Realizar la solicitud al backend para obtener recetas
    fetch('http://localhost:5000/api/recipes') // Asegúrate de que esta URL esté correcta
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data); // Guardamos las recetas en el estado
      })
      .catch((error) => console.error('Error fetching recipes:', error)); // Manejo de errores
  }, []);

  return (
    <div className='max-w-[1440px] mx-auto overflow-hidden'>
      <Hero />
      <Pets />
      <Services />
      <Adoption />
      <Newsletter />

      {/* Mostrar las recetas (si existen) */}
      <div>
        <h2 className="text-2xl font-bold mt-8">Recipes</h2>
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe) => (
              <li key={recipe.id} className="p-4 border-b">
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes available</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
