import { useState } from "react";

const questions = [
    {
        question: "¿Qué formato es ideal para exportar iconos o gráficos vectoriales escalables desde Figma a la web?",
        options: ["JPEG", "PNG", "SVG", "WebP"],
        answer: "SVG",
    },
    {
        question: "¿Qué tipo de herramienta o extensión se usa en Figma para convertir un diseño directamente a código React/JSX?",
        options: ["Un script de Node.js", "Un Plugin de Figma", "Un archivo de configuración JSON", "Una Action de GitHub"],
        answer: "Un Plugin de Figma",
    },
    {
        question: "Cuando se exporta código con un plugin como 'Anima' o 'Figma to Code', ¿qué clases CSS se utilizan frecuentemente hoy en día para estilizar los componentes exportados?",
        options: ["Bootstrap classes", "SASS Mixins", "Tailwind CSS classes", "Estilos en línea (inline styles) exclusivos"],
        answer: "Tailwind CSS classes",
    },
    {
        question: "¿Por qué se prefiere diseñar en Figma antes de programar componentes complejos en React?",
        options: [
            "Porque Figma compila el código más rápido",
            "Permite iterar visualmente, colaborar y alinear expectativas antes de invertir tiempo de desarrollo",
            "Porque Figma es un entorno de ejecución de JavaScript",
            "Para evitar el uso de CSS en React"
        ],
        answer: "Permite iterar visualmente, colaborar y alinear expectativas antes de invertir tiempo de desarrollo",
    },
    {
        question: "¿Qué formato de imagen es mejor exportar desde Figma para fotografías con necesidad de transparencia si se requiere alto rendimiento y poco peso?",
        options: ["GIF", "PNG-24", "WebP o AVIF", "BMP"],
        answer: "WebP o AVIF",
    }
];

const TestEjercicio4 = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));

    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de ${questions.length}`);
    };

    return (
        <div className="p-6 mt-8 border-t">
            <h2 className="text-2xl font-bold mb-4">Test teórico: Integración con Figma</h2>

            {questions.map((q, i) => (
                <div key={i} className="mb-4 bg-gray-100 p-4 rounded">
                    <p className="font-bold mb-2">{i + 1}. {q.question}</p>
                    <div className="flex flex-col gap-2">
                        {q.options.map((opt) => (
                            <button
                                key={opt}
                                className={`text-left px-4 py-2 border rounded ${selectedAnswers[i] === opt
                                        ? "bg-blue-500 text-white"
                                        : "bg-white text-black"
                                    }`}
                                onClick={() => handleSelect(i, opt)}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <button
                onClick={checkAnswers}
                className="bg-green-500 text-white font-bold px-4 py-2 mt-4 rounded"
            >
                Verificar respuestas
            </button>
        </div>
    );
};

export default TestEjercicio4;
