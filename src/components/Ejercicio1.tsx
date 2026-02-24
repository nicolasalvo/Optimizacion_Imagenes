import ImageOptimizer from "./ImageOptimizer";
import TestEjercicio1 from "./TestEjercicio1";

const Ejercicio1 = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Ejercicio 1</h2>
            <ImageOptimizer />

            <hr className="my-8 border-t-2 border-gray-200" />

            <TestEjercicio1 />
        </div>
    );
};

export default Ejercicio1;