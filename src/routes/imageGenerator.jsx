import { useImageGenerator } from '../contacts.js';

export default function ImageGenerator() {
    const { imageUrl , processing, handleSubmit } = useImageGenerator();
    return (
        <div>
            <h1>Image Generator</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="prompt">Enter a prompt:</label>
                <input type="text" id="prompt" name="prompt" required />
                <button type="submit">Generate Image</button>
            </form>
            {processing && <p>Processing, please wait...</p>}
            {imageUrl && <img src={imageUrl} alt="Generated" />}
        </div>
    );
}
