import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
    const [text, setText] = useState<string>(() => {
        return localStorage.getItem("tutorialContent") || "# Mis Notas de la Práctica\n\nEscribe aquí tus conclusiones sobre los ejercicios realizados...\n\nPor ejemplo:\n- **Lazy Loading**: Reduce tiempo de carga.\n- **Canvas**: Permite manipular píxeles directamente.";
    });

    const [isEditing, setIsEditing] = useState(true);

    useEffect(() => {
        localStorage.setItem("tutorialContent", text);
    }, [text]);

    return (
        <div className="mt-4 border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex justify-between items-center bg-gray-50 px-5 py-3 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    Notas del Estudiante
                </h3>

                <div className="flex bg-gray-200 rounded-lg p-1">
                    <button
                        onClick={() => setIsEditing(true)}
                        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${isEditing ? "bg-white text-blue-700 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
                    >
                        Editar
                    </button>
                    <button
                        onClick={() => setIsEditing(false)}
                        className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${!isEditing ? "bg-white text-blue-700 shadow-sm" : "text-gray-600 hover:text-gray-900"}`}
                    >
                        Vista Previa
                    </button>
                </div>
            </div>

            <div>
                {isEditing ? (
                    <textarea
                        className="w-full h-72 p-5 font-mono text-sm text-gray-700 resize-y focus:outline-none focus:ring-2 focus:ring-blue-100"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Escribe tus notas en formato Markdown..."
                    />
                ) : (
                    <div className="p-6 h-72 overflow-y-auto bg-gray-50 prose prose-blue max-w-none">
                        {text ? (
                            <ReactMarkdown>{text}</ReactMarkdown>
                        ) : (
                            <p className="text-gray-400 italic">No hay contenido para mostrar.</p>
                        )}
                    </div>
                )}
            </div>

            <div className="bg-gray-50 px-5 py-2 border-t border-gray-200 text-xs text-gray-500 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Autoguardado en LocalStorage</span>
            </div>
        </div>
    );
};

export default MarkdownEditor;
