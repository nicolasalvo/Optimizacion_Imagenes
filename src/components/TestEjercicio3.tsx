import { useState } from "react";

const questions = [
    {
        question: "¿Qué API de JavaScript permite manipular imágenes en un elemento <canvas>?",
        options: ["WebGL API", "Canvas API", "Intersection API", "Fetch API"],
        answer: "Canvas API",
    },
    {
        question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
        options: ["getContext('2d')", "putImageData()", "drawImage()", "getImageData()"],
        answer: "getImageData()",
    },
    {
        question: "¿Qué método se usa para pintar la imagen o los nuevos píxeles de vuelta en el canvas?",
        options: ["putImageData()", "drawImage()", "fill()", "stroke()"],
        answer: "putImageData()",
    },
    {
        question: "En el array de datos de píxeles (ImageData.data), ¿cuántos valores numéricos componen un solo píxel?",
        options: ["1 (Grises)", "3 (RGB)", "4 (RGBA)", "2 (X, Y)"],
        answer: "4 (RGBA)",
    },
    {
        question: "Para invertir los colores de un píxel RGB (0-255), ¿qué operación matemática se usa comúnmente?",
        options: ["Multiplicar por -1", "Dividir entre 255", "Restar el valor actual a 255 (Ej: 255 - R)", "Sumar 255"],
        answer: "Restar el valor actual a 255 (Ej: 255 - R)",
    }
];

const TestEjercicio3 = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));
    const [showResults, setShowResults] = useState(false);

    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
        setShowResults(false);
    };

    const checkAnswers = () => {
        setShowResults(true);
    };

    const getScore = () => {
        return selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
    };

    return (
        <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Test teórico: Manipulación de Imágenes con Canvas</h2>
            <div className="space-y-6">
                {questions.map((q, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <p className="font-semibold text-gray-800 mb-4">{i + 1}. {q.question}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {q.options.map((opt) => {
                                const isSelected = selectedAnswers[i] === opt;
                                const isCorrect = opt === q.answer;

                                let btnClass = "text-left px-4 py-3 border rounded-md transition-colors text-sm ";

                                if (showResults) {
                                    if (isCorrect) {
                                        btnClass += "bg-green-50 border-green-500 text-green-700 font-medium";
                                    } else if (isSelected && !isCorrect) {
                                        btnClass += "bg-red-50 border-red-300 text-red-700 line-through opacity-80";
                                    } else {
                                        btnClass += "bg-gray-50 border-gray-200 text-gray-500";
                                    }
                                } else {
                                    if (isSelected) {
                                        btnClass += "bg-blue-500 border-blue-600 text-white shadow-sm";
                                    } else {
                                        btnClass += "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-300";
                                    }
                                }

                                return (
                                    <button
                                        key={opt}
                                        className={btnClass}
                                        onClick={() => handleSelect(i, opt)}
                                        disabled={showResults}
                                    >
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
                {!showResults ? (
                    <button
                        onClick={checkAnswers}
                        disabled={selectedAnswers.includes("")}
                        className={`font-semibold px-6 py-2.5 rounded-md text-white shadow-sm transition-colors ${selectedAnswers.includes("") ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        Verificar respuestas
                    </button>
                ) : (
                    <div className="flex items-center justify-between w-full">
                        <div className="text-lg font-bold">
                            Resultado: <span className={getScore() === questions.length ? "text-green-600" : "text-amber-600"}>{getScore()} / {questions.length}</span> correctas
                        </div>
                        <button
                            onClick={() => {
                                setSelectedAnswers(Array(questions.length).fill(""));
                                setShowResults(false);
                            }}
                            className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md font-medium text-sm transition-colors"
                        >
                            Reintentar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestEjercicio3;
