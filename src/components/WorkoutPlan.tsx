interface UserData {
  age: number;
  gender: string;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  restrictions: string;
}

interface WorkoutPlanProps {
  userData: UserData;
}

export default function WorkoutPlan({ userData }: WorkoutPlanProps) {
  const workouts = [
    {
      day: 'Segunda-feira',
      exercises: [
        { name: 'Caminhada rápida', duration: '30 minutos', intensity: 'Moderada' },
        { name: 'Abdominais', sets: '3x15', intensity: 'Alta' },
        { name: 'Flexões', sets: '3x10', intensity: 'Alta' }
      ]
    },
    {
      day: 'Terça-feira',
      exercises: [
        { name: 'Corrida leve', duration: '20 minutos', intensity: 'Moderada' },
        { name: 'Agachamentos', sets: '3x12', intensity: 'Alta' },
        { name: 'Prancha', duration: '3x30 segundos', intensity: 'Alta' }
      ]
    },
    {
      day: 'Quarta-feira',
      exercises: [
        { name: 'Bicicleta ou elíptico', duration: '30 minutos', intensity: 'Moderada' },
        { name: 'Elevação de pernas', sets: '3x12', intensity: 'Alta' },
        { name: 'Burpees', sets: '3x8', intensity: 'Alta' }
      ]
    },
    {
      day: 'Quinta-feira',
      exercises: [
        { name: 'Caminhada rápida', duration: '30 minutos', intensity: 'Moderada' },
        { name: 'Abdominais', sets: '3x15', intensity: 'Alta' },
        { name: 'Flexões', sets: '3x10', intensity: 'Alta' }
      ]
    },
    {
      day: 'Sexta-feira',
      exercises: [
        { name: 'Corrida leve', duration: '20 minutos', intensity: 'Moderada' },
        { name: 'Agachamentos', sets: '3x12', intensity: 'Alta' },
        { name: 'Prancha', duration: '3x30 segundos', intensity: 'Alta' }
      ]
    },
    {
      day: 'Sábado',
      exercises: [
        { name: 'Atividade recreativa (natação, dança, etc.)', duration: '45 minutos', intensity: 'Moderada' }
      ]
    },
    {
      day: 'Domingo',
      exercises: [
        { name: 'Descanso ou caminhada leve', duration: '20 minutos', intensity: 'Leve' }
      ]
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Plano de Treino Diário</h2>
      <p className="mb-4 text-gray-600">
        Este plano é focado em emagrecimento, combinando cardio para queima calórica e exercícios de força para tonificação.
        Ajuste conforme seu nível de condicionamento físico.
      </p>
      <div className="space-y-6">
        {workouts.map((workout, index) => (
          <div key={index} className="border-b pb-4">
            <h3 className="text-lg font-medium mb-2">{workout.day}</h3>
            <ul className="space-y-2">
              {workout.exercises.map((exercise, exIndex) => (
                <li key={exIndex} className="flex justify-between">
                  <span>{exercise.name}</span>
                  <span className="text-gray-600">
                    {exercise.duration || exercise.sets} - {exercise.intensity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-yellow-50 rounded-md">
        <h4 className="font-semibold text-yellow-800">Dicas Importantes:</h4>
        <ul className="mt-2 text-sm text-yellow-700">
          <li>• Sempre consulte um médico antes de iniciar um programa de exercícios</li>
          <li>• Mantenha-se hidratado durante os treinos</li>
          <li>• Faça aquecimento de 5-10 minutos antes de cada sessão</li>
          <li>• Descanse quando sentir dor ou fadiga excessiva</li>
        </ul>
      </div>
    </div>
  );
}