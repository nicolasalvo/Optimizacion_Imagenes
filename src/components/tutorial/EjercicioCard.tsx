import { Link } from "react-router-dom";

interface EjercicioCardProps {
    title: string;
    path: string;
    description: string;
    icon: string;
}

const EjercicioCard = ({ title, path, description, icon }: EjercicioCardProps) => {
    return (
        <div className="p-6 border border-gray-200 bg-white flex flex-col h-full rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="text-4xl mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="mb-6 flex-grow text-gray-600 leading-relaxed">{description}</p>
            <Link
                to={path}
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-4 py-2.5 mt-auto text-center rounded-lg transition-colors flex justify-center items-center gap-2"
            >
                Ver Ejercicio
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </Link>
        </div>
    );
};

export default EjercicioCard;
