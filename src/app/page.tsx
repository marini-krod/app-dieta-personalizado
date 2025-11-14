import { useState } from 'react';
import Questionnaire from '../components/Questionnaire';
import WorkoutPlan from '../components/WorkoutPlan';
import MealPlan from '../components/MealPlan';

export default function Home() {
  const [userData, setUserData] = useState(null);

  const handleQuestionnaireSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">App de Dieta Personalizada</h1>
        {!userData ? (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Questionnaire onSubmit={handleQuestionnaireSubmit} />
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Seu Perfil</h2>
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Idade:</strong> {userData.age} anos</p>
                <p><strong>Gênero:</strong> {userData.gender}</p>
                <p><strong>Peso:</strong> {userData.weight} kg</p>
                <p><strong>Altura:</strong> {userData.height} cm</p>
                <p><strong>Nível de Atividade:</strong> {userData.activityLevel}</p>
                <p><strong>Restrições:</strong> {userData.restrictions || 'Nenhuma'}</p>
              </div>
            </div>
            <WorkoutPlan userData={userData} />
            <MealPlan userData={userData} />
          </div>
        )}
      </div>
    </div>
  );
}