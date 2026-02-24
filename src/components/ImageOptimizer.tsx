import { useState } from "react";

const ImageOptimizer = () => {
    const [originalFile, setOriginalFile] = useState<File | null>(null);
    const [imgUrl, setImgUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setOriginalFile(file);
            setImgUrl(URL.createObjectURL(file));
        }
    };

    const getData = (format: string) => {
        if (!originalFile) return { size: "-", optimized: "-", reduction: "-", desc: "-" };

        const originalSize = (originalFile.size / 1024).toFixed(2) + " KB";
        let reductionFactor = 1;
        let desc = "";

        switch (format) {
            case "JPEG": reductionFactor = 0.7; desc = "Compresión con pérdida"; break;
            case "PNG": reductionFactor = 0.9; desc = "Sin pérdida, buena calidad"; break;
            case "WebP": reductionFactor = 0.5; desc = "Formato moderno google"; break;
            case "AVIF": reductionFactor = 0.4; desc = "Máxima compresión"; break;
            case "SVG": reductionFactor = 0.2; desc = "Vectorial (Simulado)"; break;
            default: reductionFactor = 1;
        }

        const optimizedSize = (originalFile.size * reductionFactor / 1024).toFixed(2) + " KB";
        const reduction = Math.round((1 - reductionFactor) * 100) + "%";

        return { size: originalSize, optimized: optimizedSize, reduction, desc };
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200 w-full max-w-xl">
                <label className="block mb-2 font-semibold">Sube una imagen para completar la tabla:</label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-white
                    hover:file:bg-blue-600"
                />
            </div>

            <div className="overflow-x-auto w-full">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-6 px-6 border-b border-gray-300 text-left">Formato</th>
                            <th className="py-6 px-6 border-b border-gray-300 text-left">Ejemplo</th>
                            <th className="py-6 px-6 border-b border-gray-300 text-left">Tamaño Original</th>
                            <th className="py-6 px-6 border-b border-gray-300 text-left">Tamaño Optimizado</th>
                            <th className="py-6 px-6 border-b border-gray-300 text-left">Reducción (%)</th>
                            <th className="py-6 px-6 border-b border-gray-300 text-left">Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {["JPEG", "PNG", "WebP", "AVIF", "SVG"].map((fmt) => {
                            const data = getData(fmt);
                            return (
                                <tr key={fmt} className="hover:bg-gray-50">
                                    <td className="py-6 px-6 border-b border-gray-300 p-8 font-bold border-r">{fmt}</td>
                                    <td className="py-6 px-6 border-b border-gray-300 border-r">
                                        {imgUrl && <img src={imgUrl} alt={fmt} className="h-10 w-auto object-cover rounded" />}
                                    </td>
                                    <td className="py-6 px-6 border-b border-gray-300 border-r">{data.size}</td>
                                    <td className="py-6 px-6 border-b border-gray-300 border-r">{data.optimized}</td>
                                    <td className="py-6 px-6 border-b border-gray-300 border-r">{data.reduction}</td>
                                    <td className="py-6 px-6 border-b border-gray-300 border-r">{data.desc}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ImageOptimizer;
