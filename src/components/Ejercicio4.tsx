import FigmaComponent from "./FigmaComponent";
import TestEjercicio4 from "./TestEjercicio4";

const Ejercicio4 = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">
                Ejercicio 4: Integración de Figma en React
            </h1>

            <p className="mb-8 text-gray-600">
                El siguiente diseño fue conceptualizado en Figma y convertido en un componente React limpio y reutilizable utilizando Tailwind CSS para la estilización.
            </p>

            <div className="mb-10 p-8 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <FigmaComponent />
            </div>

            <TestEjercicio4 />
        </div>
    );
};

export default Ejercicio4;