import { Ring } from '@uiball/loaders';
import './Loading.css';

function Loading() {
    return (
        <div className="loading-container">
            <div className="loader-wrapper">
                <Ring
                    size={60}
                    lineWeight={3}
                    speed={2}
                    color="black"
                />
            </div>
        </div>
    )
}

export default Loading;