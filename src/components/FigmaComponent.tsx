const FigmaComponent = () => {
    return (
        <div className="bg-white p-8 rounded-xl text-center max-w-md mx-auto border border-gray-200 shadow-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-500"></div>

            <div className="bg-blue-50 w-20 h-20 mx-auto rounded-full mb-6 flex justify-center items-center shadow-inner border border-blue-100">
                <span className="text-4xl text-blue-600">🎨</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-3">Diseño Figma</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
                Este componente simula un diseño creado en Figma y exportado usando plugins hacia JSX y Tailwind CSS.
            </p>

            <button className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-bold py-3 px-4 rounded-lg shadow-sm flex items-center justify-center gap-2">
                <span>Exportado con éxito</span>
                <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </button>

            <p className="mt-5 text-xs text-gray-400 font-semibold tracking-wider uppercase">
                Generado automáticamente
            </p>
        </div>
    );
};

export default FigmaComponent;
