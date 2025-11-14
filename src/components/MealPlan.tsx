interface UserData {
  age: number;
  gender: string;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  restrictions: string;
}

interface MealPlanProps {
  userData: UserData;
}

export default function MealPlan({ userData }: MealPlanProps) {
  // Calcular necessidades calóricas básicas (fórmula simplificada de Harris-Benedict)
  const calculateBMR = () => {
    const { age, gender, weight, height } = userData;
    let bmr;
    if (gender === 'masculino') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    return Math.round(bmr);
  };

  const bmr = calculateBMR();
  const activityMultiplier = {
    sedentario: 1.2,
    leve: 1.375,
    moderado: 1.55,
    ativo: 1.725
  };
  const tdee = Math.round(bmr * activityMultiplier[userData.activityLevel]);
  const deficit = 500; // Para emagrecimento saudável
  const targetCalories = tdee - deficit;

  const meals = [
    {
      time: 'Café da Manhã',
      foods: [
        'Aveia com frutas (banana, maçã)',
        'Iogurte grego natural',
        'Chá verde ou café sem açúcar'
      ],
      calories: Math.round(targetCalories * 0.25)
    },
    {
      time: 'Lanche da Manhã',
      foods: [
        'Maçã ou pera',
        'Nozes ou sementes (1 punhado)'
      ],
      calories: Math.round(targetCalories * 0.1)
    },
    {
      time: 'Almoço',
      foods: [
        'Peito de frango grelhado ou salmão',
        'Salada de folhas verdes com legumes',
        'Quinoa ou arroz integral',
        'Legumes cozidos no vapor'
      ],
      calories: Math.round(targetCalories * 0.35)
    },
    {
      time: 'Lanche da Tarde',
      foods: [
        'Iogurte natural com frutas',
        'Cenoura ou pepino com hommus'
      ],
      calories: Math.round(targetCalories * 0.1)
    },
    {
      time: 'Jantar',
      foods: [
        'Peixe ou tofu',
        'Vegetais assados',
        'Salada mista'
      ],
      calories: Math.round(targetCalories * 0.2)
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Plano de Alimentação Nutricional</h2>
      <div className="mb-4 p-4 bg-blue-50 rounded-md">
        <h3 className="font-semibold text-blue-800">Seu Metabolismo Basal: {bmr} calorias/dia</h3>
        <p className="text-blue-700">Calorias diárias recomendadas para emagrecimento: {targetCalories} kcal</p>
        <p className="text-sm text-blue-600 mt-1">
          Este cálculo é aproximado. Consulte um nutricionista para avaliação personalizada.
        </p>
      </div>
      <div className="space-y-6">
        {meals.map((meal, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">{meal.time} (~{meal.calories} kcal)</h3>
            <ul className="space-y-1 text-gray-700">
              {meal.foods.map((food, foodIndex) => (
                <li key={foodIndex} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {food}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-green-50 rounded-md">
        <h4 className="font-semibold text-green-800">Dicas Nutricionais:</h4>
        <ul className="mt-2 text-sm text-green-700">
          <li>• Beba pelo menos 2 litros de água por dia</li>
          <li>• Priorize proteínas magras e vegetais</li>
          <li>• Evite açúcares refinados e alimentos processados</li>
          <li>• Faça refeições a cada 3-4 horas para manter o metabolismo ativo</li>
          <li>• Inclua gorduras saudáveis como abacate e azeite de oliva</li>
        </ul>
      </div>
      {userData.restrictions && (
        <div className="mt-4 p-4 bg-orange-50 rounded-md">
          <h4 className="font-semibold text-orange-800">Restrições Consideradas:</h4>
          <p className="text-orange-700">{userData.restrictions}</p>
          <p className="text-sm text-orange-600 mt-1">
            Este plano pode precisar de ajustes. Consulte um profissional de saúde.
          </p>
        </div>
      )}
    </div>
  );
}