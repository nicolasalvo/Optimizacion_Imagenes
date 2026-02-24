import { useState } from "react";

const questions = [
    {
        question: "¿Cuál de estos formatos soporta transparencia?",
        options: ["JPEG", "PNG", "BMP", "TIFF"],
        answer: "PNG",
    },
    {
        question: "¿Qué formato es más eficiente para la web moderna?",
        options: ["PNG", "JPEG", "WebP", "TIFF"],
        answer: "WebP",
    },
    {
        question: "¿Cuál es un formato de gráficos vectoriales?",
        options: ["JPG", "PNG", "SVG", "GIF"],
        answer: "SVG",
    },
    {
        question: "¿Qué formato admite animaciones?",
        options: ["JPEG", "PDF", "GIF", "TIFF"],
        answer: "GIF",
    },
    {
        question: "¿Qué formato es conocido por su compresión con pérdida?",
        options: ["PNG", "JPEG", "SVG", "RAW"],
        answer: "JPEG",
    },
    {
        question: "¿Cuál es el sucesor más moderno de WebP?",
        options: ["AVIF", "JPG", "BMP", "ICO"],
        answer: "AVIF",
    },
    {
        question: "¿Qué formato es ideal para fotografías complejas?",
        options: ["GIF", "SVG", "JPEG", "ICO"],
        answer: "JPEG",
    },
    {
        question: "¿Cuántos colores soporta un GIF como máximo?",
        options: ["256", "16 millones", "Unlimited", "65536"],
        answer: "256",
    },
    {
        question: "¿Qué significa PNG?",
        options: ["Portable Network Graphics", "Personal New Graphic", "Public Network Guia", "Photo Network Group"],
        answer: "Portable Network Graphics",
    },
    {
        question: "¿Qué atributo HTML ayuda a optimizar la carga de imágenes?",
        options: ["src", "alt", "loading=\"lazy\"", "title"],
        answer: "loading=\"lazy\"",
    },
];

const TestEjercicio1 = () => {
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
        <div className="p-6 border rounded-lg shadow-md bg-white mt-8">
            <h2 className="text-2xl font-bold mb-4">Test de Conocimientos</h2>
            {questions.map((q, i) => (
                <div key={i} className="mb-6">
                    <p className="font-semibold text-lg">{i + 1}. {q.question}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {q.options.map((opt) => (
                            <button
                                key={opt}
                                className={`px-4 py-2 rounded transition-colors ${selectedAnswers[i] === opt
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                                    }`}
                                onClick={() => handleSelect(i, opt)}
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <button onClick={checkAnswers} className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 mt-4 rounded">
                Verificar respuestas
            </button>
        </div>
    );
};

export default TestEjercicio1;
