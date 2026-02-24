import EjercicioCard from "./EjercicioCard";
import MarkdownEditor from "./MarkdownEditor";
import Test from "./Test";

const ejercicios = [
    {
        id: 1,
        title: "Optimización de Imágenes",
        path: "/ejercicio1",
        description: "Aprende sobre los diferentes formatos de imagen web (JPEG, PNG, WebP) y sus ventajas en rendimiento.",
        icon: "🖼️"
    },
    {
        id: 2,
        title: "Lazy Loading",
        path: "/ejercicio2",
        description: "Técnica que retrasa la carga de imágenes hasta que el usuario hace scroll hacia ellas, ahorrando ancho de banda.",
        icon: "⚡"
    },
    {
        id: 3,
        title: "Manipulación con Canvas",
        path: "/ejercicio3",
        description: "Uso de la API de Canvas para leer y modificar los datos de los píxeles (brillo, escala de grises, etc).",
        icon: "🎨"
    },
    {
        id: 4,
        title: "Figma a React",
        path: "/ejercicio4",
        description: "Integración de componentes diseñados en Figma exportados hacia el ecosistema React y Tailwind CSS.",
        icon: "✨"
    },
];

const Tutorial = () => {
    return (
        <div className="p-6 max-w-6xl mx-auto font-sans">
            <header className="mb-10 pb-6 border-b border-gray-200">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">Revisión Final</div>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Tutorial Interactivo React</h1>
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                    Explora los diferentes conceptos sobre optimización, rendimiento visual y manipulación gráfica web a través de estos ejercicios prácticos.
                </p>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">1</span>
                    Ejercicios Prácticos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ejercicios.map((ejercicio) => (
                        <EjercicioCard
                            key={ejercicio.id}
                            title={ejercicio.title}
                            path={ejercicio.path}
                            description={ejercicio.description}
                            icon={ejercicio.icon}
                        />
                    ))}
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-3 text-gray-800 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-sm">2</span>
                    Tus Anotaciones
                </h2>
                <p className="text-gray-600 mb-6 font-medium">Utiliza este espacio respaldado por localStorage para documentar lo que has aprendido en cada ejercicio.</p>
                <MarkdownEditor />
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">3</span>
                    Evaluación General
                </h2>
                <Test />
            </section>
        </div>
    );
};

export default Tutorial;
