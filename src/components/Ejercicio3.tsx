import ImageEditor from "./ImageEditor";
import TestEjercicio3 from "./TestEjercicio3";

const Ejercicio3 = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Ejercicio 3: Manipulación de Imágenes con Canvas API</h1>

            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 mb-6 rounded-r-md shadow-sm">
                <p>
                    La API de Canvas HTML5 permite dibujar y modificar gráficos usando JavaScript.
                    A diferencia de CSS, donde los filtros son solo visuales, con Canvas alteramos los datos reales de píxeles.
                </p>
            </div>

            <ImageEditor />
            <TestEjercicio3 />
        </div>
    );
};

export default Ejercicio3;