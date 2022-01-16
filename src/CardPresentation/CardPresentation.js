import imgJere from '../images/image-jeremy.png';
import './CardPresentation.css'

export default function CardPresentation() {
    return (
        <div className='cadre mx-0 px-0 col-3 text-white'>
            <div className='presentation my-auto d-flex flex-column align-items-start ps-3 w-100'>
                <div className="divImgJeremy">
                    <img className='imgJere' src={imgJere} alt="" />
                </div>
                <p className="txtSousImg pb-0 mb-0 mt-4">Report for</p>
                <h2 className="h1Jeremy pt-0 mt-0">Jeremy <br />Robson</h2>
            </div>
            <div className='sousPresentation ps-3 my-2'>
            <p className='my-1'>Daily</p>
            <p className='my-1'>Weekly</p>
            <p className='my-1'>Monthly</p>

            </div>
        </div>
    )
}
