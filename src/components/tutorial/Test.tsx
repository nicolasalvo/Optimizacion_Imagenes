import { useState, useMemo } from "react";

const allQuestions = [
    { question: "¿Cuál es el formato más eficiente para fotografías en la web actualmente soportado por casi todos los navegadores?", options: ["JPEG", "PNG", "WebP", "GIF"], answer: "WebP" },
    { question: "¿Para qué tipo de imágenes es más adecuado el formato SVG?", options: ["Fotografías complejas", "Iconos y logotipos vectoriales", "Animaciones largas", "Capturas de pantalla fotográficas"], answer: "Iconos y logotipos vectoriales" },
    { question: "¿Qué hace Lazy Loading?", options: ["Carga todas las imágenes de inmediato", "Carga imágenes solo cuando son visibles", "Reduce la calidad de las imágenes"], answer: "Carga imágenes solo cuando son visibles" },
    { question: "¿Qué atributo nativo de HTML5 permite hacer Lazy Loading en imágenes?", options: ["loading=\"lazy\"", "defer=\"true\"", "async=\"img\""], answer: "loading=\"lazy\"" },
    { question: "¿Qué API de JavaScript permite manipular imágenes píxel por píxel en el navegador?", options: ["WebGL API", "Canvas API", "Intersection API"], answer: "Canvas API" },
    { question: "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?", options: ["getContext()", "getImageData()", "drawImage()"], answer: "getImageData()" },
    { question: "¿Qué formato es ideal para exportar iconos escalables desde Figma?", options: ["JPEG", "PNG", "SVG"], answer: "SVG" },
    { question: "¿Por qué se prefiere diseñar en Figma antes de programar componentes complejos en React?", options: ["Permite iterar visualmente y alinear expectativas", "Figma compila código más rápido", "Para evitar el uso de CSS"], answer: "Permite iterar visualmente y alinear expectativas" }
];

const Test = () => {
    const questions = useMemo(() => {
        return [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
    }, []);

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
        <div className="mt-8 bg-gray-900 text-white p-6 rounded shadow border">
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Test Final de Evaluación</h2>
                <p>Demuestra lo que has aprendido en esta práctica interactiva. ¡Las preguntas cambian aleatoriamente!</p>
            </div>

            <div className="space-y-4">
                {questions.map((q, i) => (
                    <div key={i} className="bg-gray-800 p-4 rounded border border-gray-700">
                        <p className="font-bold mb-2">{i + 1}. {q.question}</p>
                        <div className="flex flex-col gap-2">
                            {q.options.map((opt) => (
                                <button
                                    key={opt}
                                    className={`text-left px-4 py-2 border border-gray-600 rounded ${selectedAnswers[i] === opt
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-700"
                                        }`}
                                    onClick={() => handleSelect(i, opt)}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <button
                    onClick={checkAnswers}
                    className="bg-green-600 text-white font-bold px-6 py-2 rounded"
                >
                    Verificar respuestas
                </button>
                <button
                    onClick={() => window.location.reload()}
                    className="ml-4 bg-gray-600 text-white px-4 py-2 rounded"
                >
                    Refrescar para nuevo intento
                </button>
            </div>
        </div>
    );
};

export default Test;
