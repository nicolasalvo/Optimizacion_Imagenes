import LazyImage from "./LazyImage";
import TestEjercicio2 from "./TestEjercicio2";

const Ejercicio2 = () => {
    const images = Array.from({ length: 9 }).map((_, i) => `https://via.placeholder.com/600x400?text=Imagen+${i + 1}`);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-gray-800 border-b pb-2">Ejercicio 2: Lazy Loading en Imágenes</h1>
            <p className="mb-6 text-gray-600">
                Las siguientes imágenes solo se cargarán cuando sean visibles en la pantalla mediante scroll.
                Hemos configurado un umbral del 10% (threshold: 0.1) en el Intersection Observer.
            </p>

            <div className="h-[80vh] flex flex-col items-center justify-center bg-gray-50 rounded-lg border border-dashed border-gray-300 mb-8">
                <p className="text-blue-600 font-semibold text-lg text-center mb-2">
                    Área inicial de la página
                </p>
                <p className="text-gray-500 text-sm">
                    ↓ Haz scroll hacia abajo para ver las imágenes cargarse ↓
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div key={index} className="flex flex-col items-center bg-white shadow-sm border border-gray-100 p-4 rounded-lg hover:shadow-md transition-shadow">
                        <span className="mb-3 text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Imagen {index + 1}</span>
                        <LazyImage src={src} alt={`Imagen ${index + 1}`} />
                    </div>
                ))}
            </div>

            <TestEjercicio2 />
        </div>
    );
};

export default Ejercicio2;