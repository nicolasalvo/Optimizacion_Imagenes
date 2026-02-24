import { useRef, useState } from "react";

const ImageEditor = () => {
    const [image, setImage] = useState<string | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const applyFilter = (filter: string) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx || !image) return;

        const img = new Image();
        img.src = image;
        img.onload = () => {
            const scale = Math.min(1, 800 / img.width);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                if (filter === "grayscale") {
                    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
                    data[i] = avg;
                    data[i + 1] = avg;
                    data[i + 2] = avg;
                } else if (filter === "invert") {
                    data[i] = 255 - data[i];
                    data[i + 1] = 255 - data[i + 1];
                    data[i + 2] = 255 - data[i + 2];
                } else if (filter === "brightness") {
                    const adjustment = 40;
                    data[i] = Math.min(255, data[i] + adjustment);
                    data[i + 1] = Math.min(255, data[i + 1] + adjustment);
                    data[i + 2] = Math.min(255, data[i + 2] + adjustment);
                }
            }

            ctx.putImageData(imageData, 0, 0);
        };
    };

    const resetImage = () => {
        applyFilter("none");
    };

    return (
        <div className="flex flex-col items-center bg-white p-6 border border-gray-200 mt-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Sube una imagen para editar</h2>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-6 block w-full max-w-sm text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100 transition-colors"
            />

            {image && (
                <div className="mb-6 flex flex-wrap justify-center gap-3">
                    <button onClick={resetImage} className="bg-gray-500 hover:bg-gray-600 transition-colors text-white font-medium px-4 py-2 rounded shadow-sm">
                        Original
                    </button>
                    <button onClick={() => applyFilter("grayscale")} className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium px-4 py-2 rounded shadow-sm">
                        Escala de Grises
                    </button>
                    <button onClick={() => applyFilter("invert")} className="bg-red-500 hover:bg-red-600 transition-colors text-white font-medium px-4 py-2 rounded shadow-sm">
                        Invertir Colores
                    </button>
                    <button onClick={() => applyFilter("brightness")} className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-white font-medium px-4 py-2 rounded shadow-sm">
                        Aumentar Brillo
                    </button>
                </div>
            )}

            <div className="w-full flex justify-center bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-2 min-h-[300px]">
                {!image ? (
                    <div className="flex items-center justify-center text-gray-400">
                        La imagen aparecerá aquí
                    </div>
                ) : (
                    <canvas ref={canvasRef} className="max-w-full h-auto shadow-md rounded"></canvas>
                )}
            </div>

            {image && <img src={image} alt="hidden" className="hidden" onLoad={() => resetImage()} />}
        </div>
    );
};

export default ImageEditor;
